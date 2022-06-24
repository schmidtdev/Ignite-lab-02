import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom'
import classNames from 'classnames'

interface LessionProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export function Lession(props: LessionProps) {
  const { slug } = useParams<{ slug: string }>()

  const isLessionAvailable = isPast(props.availableAt)
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  })

  const isActiveLession = slug === props.slug

  return (
    <Link to={`/event/lession/${props.slug}`} className='group'>
      <span className="text-gray-300">
        {availableDateFormatted}
      </span>

      <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500', {
          'bg-green-500': isActiveLession
        })}
      >
        <header className="flex items-center justify-between">
          {isLessionAvailable ? (
            <span className={classNames('text-sm font-medium flex items-center gap-2', {
                'text-white': isActiveLession,
                'text-blue-500': !isActiveLession
              })}
            >
              <CheckCircle size={20} />
              Conteúdo Liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em Breve
            </span>
          )}

          <span className={classNames('text-xs rounded px-2 py-[0.125rem] text-white border font-bold', {
              'border-white': isActiveLession,
              'border-green-300': !isActiveLession
            })}
          >
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        
        <strong className={classNames('mt-5 block', {
            'text-white': isActiveLession,
            'text-gray-200': !isActiveLession
          })}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  )
}