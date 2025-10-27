import { useState } from 'react'
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa'
import { GraduationCap } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useDiagnostic } from '@/hooks/useDiagnostic'
import { z } from 'zod'
import { useToast } from '@/hooks/use-toast'

interface DiagnosticModalProps {
  isOpen: boolean
  onClose: () => void
}

const questions = [
  { id: 1, question: 'Como você classificaria seu nível de inglês atual?', options: ['Iniciante', 'Básico', 'Intermediário', 'Avançado'] },
  { id: 2, question: 'Você já estudou inglês antes?', options: ['Nunca estudei', 'Estudei na escola', 'Já fiz curso', 'Estudei por conta própria'] },
  { id: 3, question: 'Qual seu principal objetivo ao aprender inglês?', options: ['Viagens', 'Trabalho', 'Estudos', 'Desenvolvimento Pessoal'] },
  { id: 4, question: 'Qual sua principal dificuldade com o inglês?', options: ['Conversação', 'Gramática', 'Compreensão Auditiva', 'Vocabulário'] },
  { id: 5, question: 'Em quanto tempo você gostaria de alcançar fluência?', options: ['6 meses', '1 ano', '2 anos', 'Sem pressa'] },
  { id: 6, question: 'Quanto tempo você pode dedicar ao estudo por semana?', options: ['1-2 horas', '3-4 horas', '5-6 horas', 'Mais de 6 horas'] },
  { id: 7, question: 'Qual sua faixa etária?', options: ['Criança (7-12 anos)', 'Adolescente (13-17 anos)', 'Adulto (18-50 anos)', 'Acima de 50 anos'] },
  { id: 8, question: 'Você prefere aulas presenciais ou online?', options: ['Presencial', 'Online', 'Híbrido', 'Sem preferência'] }
]

const contactSchema = z.object({
  fullName: z.string().trim().min(3, 'Nome deve ter pelo menos 3 caracteres').max(100, 'Nome muito longo'),
  phone: z.string().trim().regex(/^\+?\d{10,20}$/, 'Telefone inválido (mínimo 10 dígitos)'),
  email: z.string().trim().email('Email inválido').optional().or(z.literal(''))
})

export const DiagnosticModal = ({ isOpen, onClose }: DiagnosticModalProps) => {
  const [step, setStep] = useState<'contact' | 'questions'>('contact')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [contactInfo, setContactInfo] = useState({ fullName: '', phone: '', email: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<{ fullName?: string; phone?: string; email?: string }>({})

  const { saveDiagnostic } = useDiagnostic()
  const { toast } = useToast()

  const totalQuestions = questions.length
  const currentProgress = (currentQuestion / totalQuestions) * 100

  const handleContactSubmit = () => {
    try {
      setErrors({})
      contactSchema.parse(contactInfo)
      setStep('questions')
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: any = {}
        error.errors.forEach(err => {
          if (err.path && err.path[0]) fieldErrors[err.path[0]] = err.message
        })
        setErrors(fieldErrors)
      }
    }
  }

  const handleAnswer = async (answer: string) => {
    const newAnswers = [...answers, answer]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      return
    }

    setIsLoading(true)

    const diagnosticData = {
      fullName: contactInfo.fullName,
      phone: contactInfo.phone,
      email: contactInfo.email || undefined,
      currentLevel: newAnswers[0],
      previousExperience: newAnswers[1],
      mainObjective: newAnswers[2],
      biggestDifficulty: newAnswers[3],
      desiredTimeline: newAnswers[4],
      weeklyAvailability: newAnswers[5],
      ageRange: newAnswers[6],
      classPreference: newAnswers[7]
    }

    try {
      await saveDiagnostic(diagnosticData)
    } catch (e) {
      console.error('Erro ao salvar diagnóstico:', e)
    }

    const message = `Olá! Sou *${contactInfo.fullName}* e completei o diagnóstico no site Yázigi Swiss Park.\n\n*Meu Perfil:*\n• Nível Atual: ${newAnswers[0]}\n• Experiência: ${newAnswers[1]}\n• Objetivo: ${newAnswers[2]}\n• Dificuldade: ${newAnswers[3]}\n• Prazo: ${newAnswers[4]}\n• Disponibilidade: ${newAnswers[5]}\n• Idade: ${newAnswers[6]}\n• Preferência: ${newAnswers[7]}\n\nGostaria de receber meu diagnóstico personalizado e saber mais sobre as turmas!`

    toast({ title: 'Diagnóstico concluído!', description: 'Aguarde o redirecionamento para o WhatsApp...' })

    setTimeout(() => {
      window.open(`https://wa.me/5519991394250?text=${encodeURIComponent(message)}`, '_blank')
    }, 500)

    setIsLoading(false)
    handleClose()
  }

  const handleClose = () => {
    setStep('contact')
    setCurrentQuestion(0)
    setAnswers([])
    setContactInfo({ fullName: '', phone: '', email: '' })
    setErrors({})
    setIsLoading(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-2xl bg-gradient-to-br from-background via-background/95 to-muted/30 p-0 overflow-hidden border border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(102,45,145,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(194,210,0,0.1),transparent_50%)]" />

        <div className="relative p-6">
          <DialogHeader className="mb-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-white/10 shadow-lg">
                <GraduationCap className="h-7 w-7 text-primary" />
              </div>
              <div>
                <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary via-primary/90 to-accent bg-clip-text text-transparent">Diagnóstico de Nível</DialogTitle>
                <p className="text-sm text-muted-foreground mt-1">Descubra o curso perfeito para o seu perfil</p>
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {step === 'contact' ? (
              <div className="space-y-8">
                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <FaWhatsapp className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Diagnóstico Personalizado e Gratuito</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">Preencha seus dados para começar. Você receberá seu diagnóstico detalhado e recomendações personalizadas via WhatsApp.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-sm font-medium">Nome Completo <span className="text-primary">*</span></Label>
                    <Input id="fullName" placeholder="Seu nome completo" value={contactInfo.fullName} onChange={e => setContactInfo({ ...contactInfo, fullName: e.target.value })} className={`h-12 bg-white/5 border-white/10 focus:border-primary ${errors.fullName ? 'border-red-500' : ''}`} />
                    {errors.fullName && <p className="text-sm text-red-400">{errors.fullName}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">WhatsApp (DDD + Número) <span className="text-primary">*</span></Label>
                    <Input id="phone" placeholder="Ex: 19991394250" type="tel" inputMode="numeric" value={contactInfo.phone} onChange={e => setContactInfo({ ...contactInfo, phone: e.target.value })} className={`h-12 bg-white/5 border-white/10 focus:border-primary ${errors.phone ? 'border-red-500' : ''}`} />
                    {errors.phone && <p className="text-sm text-red-400">{errors.phone}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email <span className="text-muted-foreground">(opcional)</span></Label>
                    <Input id="email" type="email" placeholder="seu@email.com" value={contactInfo.email} onChange={e => setContactInfo({ ...contactInfo, email: e.target.value })} className={`h-12 bg-white/5 border-white/10 focus:border-primary ${errors.email ? 'border-red-500' : ''}`} />
                    {errors.email && <p className="text-sm text-red-400">{errors.email}</p>}
                  </div>

                  <Button onClick={handleContactSubmit} className="w-full h-12 bg-gradient-to-r from-primary to-accent text-white font-bold hover:opacity-90 transition-opacity shadow-xl" size="lg" disabled={isLoading}>
                    Começar Diagnóstico
                    <FaArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="space-y-2">
                  <Progress value={currentProgress} className="h-2 bg-primary/10" indicatorClassName="bg-gradient-to-r from-primary to-accent" />
                  <p className="text-sm text-muted-foreground text-center">Respondido: {currentQuestion} de {totalQuestions} perguntas</p>
                </div>

                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">{questions[currentQuestion].question}</h3>
                    <p className="text-sm text-muted-foreground">Questão {currentQuestion + 1} de {questions.length}</p>
                  </div>

                  <div className="grid gap-3">
                    {questions[currentQuestion].options.map((option, index) => (
                      <button key={index} onClick={() => handleAnswer(option)} disabled={isLoading} className="group relative w-full px-6 py-4 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all duration-200 text-left hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed">
                        <div className="relative flex items-center gap-4">
                          <div className="w-5 h-5 rounded-full border-2 border-primary/50 group-hover:border-accent transition-colors flex items-center justify-center shrink-0">
                            <div className="w-2.5 h-2.5 rounded-full bg-accent scale-0 group-hover:scale-100 transition-transform duration-200" />
                          </div>
                          <span className="font-medium text-foreground">{option}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {currentQuestion > 0 && (
                  <div className="flex justify-center pt-2">
                    <Button variant="link" onClick={() => { setCurrentQuestion(currentQuestion - 1); setAnswers(answers.slice(0, -1)); }} className="text-sm text-muted-foreground hover:text-primary" disabled={isLoading}>
                      Voltar
                    </Button>
                  </div>
                )}

                <div className="bg-accent/5 border border-accent/10 rounded-2xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <FaWhatsapp className="h-5 w-5 text-accent" />
                  </div>
                  <p className="text-sm text-muted-foreground">Suas respostas são confidenciais. Ao final, enviaremos o diagnóstico completo diretamente pelo WhatsApp.</p>
                </div>

              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
