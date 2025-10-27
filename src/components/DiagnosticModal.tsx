import { useState } from 'react'
import { FaWhatsapp, FaArrowRight, FaEnvelope } from 'react-icons/fa'
import { X } from 'lucide-react' // Mantemos o X do Lucide para fechar
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
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
  {
    id: 1,
    question: 'Como você classificaria seu nível de inglês atual?',
    options: ['Iniciante', 'Básico', 'Intermediário', 'Avançado']
  },
  {
    id: 2,
    question: 'Você já estudou inglês antes?',
    options: [
      'Nunca estudei',
      'Estudei na escola',
      'Já fiz curso',
      'Estudei por conta própria'
    ]
  },
  {
    id: 3,
    question: 'Qual seu principal objetivo ao aprender inglês?',
    options: ['Viagens', 'Trabalho', 'Estudos', 'Desenvolvimento Pessoal']
  },
  {
    id: 4,
    question: 'Qual sua principal dificuldade com o inglês?',
    options: ['Conversação', 'Gramática', 'Compreensão Auditiva', 'Vocabulário']
  },
  {
    id: 5,
    question: 'Em quanto tempo você gostaria de alcançar fluência?',
    options: ['6 meses', '1 ano', '2 anos', 'Sem pressa']
  },
  {
    id: 6,
    question: 'Quanto tempo você pode dedicar ao estudo por semana?',
    options: ['1-2 horas', '3-4 horas', '5-6 horas', 'Mais de 6 horas']
  },
  {
    id: 7,
    question: 'Qual sua faixa etária?',
    options: [
      'Criança (7-12 anos)',
      'Adolescente (13-17 anos)',
      'Adulto (18-50 anos)',
      'Acima de 50 anos'
    ]
  },
  {
    id: 8,
    question: 'Você prefere aulas presenciais ou online?',
    options: ['Presencial', 'Online', 'Híbrido', 'Sem preferência']
  }
]

const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, 'Nome deve ter pelo menos 3 caracteres')
    .max(100),
  phone: z.string().trim().min(10, 'Telefone inválido').max(20),
  email: z.string().trim().email('Email inválido').optional().or(z.literal(''))
})

export const DiagnosticModal = ({ isOpen, onClose }: DiagnosticModalProps) => {
  const [step, setStep] = useState<'contact' | 'questions'>('contact')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [contactInfo, setContactInfo] = useState({
    fullName: '',
    phone: '',
    email: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<{
    fullName?: string
    phone?: string
    email?: string
  }>({})

  const { saveDiagnostic } = useDiagnostic()
  const { toast } = useToast()

  const progress =
    step === 'contact' ? 0 : ((currentQuestion + 1) / questions.length) * 100

  const handleContactSubmit = () => {
    try {
      setErrors({})
      contactSchema.parse(contactInfo)
      setStep('questions')
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: any = {}
        error.errors.forEach(err => {
          if (err.path[0]) {
            fieldErrors[err.path[0]] = err.message
          }
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
    } else {
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

      await saveDiagnostic(diagnosticData)

      const message = `Olá! Sou *${
        contactInfo.fullName
      }* e completei o diagnóstico no site Yázigi Swiss Park.\n\n*Contato:* ${
        contactInfo.phone
      }\n${
        contactInfo.email ? `*Email:* ${contactInfo.email}\n` : ''
      }\n*Meu Perfil:*\n• Nível Atual: ${newAnswers[0]}\n• Experiência: ${
        newAnswers[1]
      }\n• Objetivo: ${newAnswers[2]}\n• Dificuldade: ${
        newAnswers[3]
      }\n• Prazo: ${newAnswers[4]}\n• Disponibilidade: ${
        newAnswers[5]
      }\n• Idade: ${newAnswers[6]}\n• Preferência: ${
        newAnswers[7]
      }\n\nGostaria de receber meu diagnóstico personalizado e saber mais sobre as turmas!`

      window.open(
        `https://wa.me/5519991394250?text=${encodeURIComponent(message)}`,
        '_blank'
      )

      toast({
        title: 'Diagnóstico concluído!',
        description: 'Redirecionando você para o WhatsApp...'
      })

      setIsLoading(false)
      handleClose()
    }
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
      <DialogContent className='sm:max-w-2xl'>
        <DialogHeader>
          <DialogTitle className='text-2xl font-bold'>
            Diagnóstico de Nível
          </DialogTitle>
        </DialogHeader>

        <div className='space-y-6 py-4'>
          {step === 'contact' ? (
            <div className='space-y-6'>
              <p className='text-muted-foreground'>
                Primeiro, precisamos de algumas informações de contato para
                enviar seu diagnóstico personalizado.
              </p>

              <div className='space-y-4'>
                <div className='space-y-2'>
                  <Label htmlFor='fullName'>Nome Completo *</Label>
                  <Input
                    id='fullName'
                    placeholder='Seu nome completo'
                    value={contactInfo.fullName}
                    onChange={e =>
                      setContactInfo({
                        ...contactInfo,
                        fullName: e.target.value
                      })
                    }
                    className={errors.fullName ? 'border-red-500' : ''}
                  />
                  {errors.fullName && (
                    <p className='text-sm text-red-500'>{errors.fullName}</p>
                  )}
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='phone'>Telefone/WhatsApp *</Label>
                  <Input
                    id='phone'
                    placeholder='(19) 99999-9999'
                    value={contactInfo.phone}
                    onChange={e =>
                      setContactInfo({ ...contactInfo, phone: e.target.value })
                    }
                    className={errors.phone ? 'border-red-500' : ''}
                  />
                  {errors.phone && (
                    <p className='text-sm text-red-500'>{errors.phone}</p>
                  )}
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='email'>Email (opcional)</Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='seu@email.com'
                    value={contactInfo.email}
                    onChange={e =>
                      setContactInfo({ ...contactInfo, email: e.target.value })
                    }
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && (
                    <p className='text-sm text-red-500'>{errors.email}</p>
                  )}
                </div>

                <Button
                  onClick={handleContactSubmit}
                  className='w-full bg-primary hover:bg-primary-hover'
                  size='lg'
                >
                  Começar Diagnóstico
                  <FaArrowRight className='ml-2 h-5 w-5' />
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className='space-y-2'>
                <div className='flex justify-between text-sm text-muted-foreground'>
                  <span>
                    Pergunta {currentQuestion + 1} de {questions.length}
                  </span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className='h-2' />
              </div>

              <div className='space-y-4'>
                <h3 className='text-xl font-semibold'>
                  {questions[currentQuestion].question}
                </h3>

                <div className='grid gap-3'>
                  {questions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      variant='outline'
                      onClick={() => handleAnswer(option)}
                      disabled={isLoading}
                      className='justify-between text-left h-auto py-4 px-6 hover:bg-primary hover:text-white transition-all group'
                    >
                      <span className='text-base'>{option}</span>
                      <FaArrowRight className='h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity' />
                    </Button>
                  ))}
                </div>
              </div>

              <div className='flex items-center gap-2 text-sm text-muted-foreground bg-cyan-light p-4 rounded-lg'>
                <FaWhatsapp className='h-4 w-4' />
                <span>
                  Após completar, você receberá seu diagnóstico personalizado
                  via WhatsApp
                </span>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
