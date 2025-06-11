import { useParams } from 'react-router-dom'
import { Editor } from '../components/Editor'
import { ToC } from '../components/ToC'
import { useQuery } from '@tanstack/react-query'
import type { Document, FetchDocumentRequest } from '../../../types/ipc'
import { useMemo } from 'react'

export default function Document() {
  const { id } = useParams()

  const { data: document, isFetching } = useQuery({
    queryKey: ['document', id],
    queryFn: async () => {
      const request: FetchDocumentRequest = { id: id! }
      const response = await window.api.fetchDocument(request)
      return response.data
    },
    enabled: !!id
  })
  const initialContent = useMemo(() => {
    if(document ){
      return `<h1>${document.title}</h1>${document.content ?? "<p></p>"}`
    }
    return ''
  }, [document])

  return (
    <main className="flex-1 flex py-12 px-10 gap-8">
      <aside className="hidden lg:block sticky top-0">
        <span className="text-rotion-300 font-semibold text-xs">
          TABELA DE CONTEÚDO
        </span>
        <ToC.Root>
          <ToC.Link> 
            Back-end
          </ToC.Link>
          <ToC.Section>
            <ToC.Link>
              Introdução
            </ToC.Link> 
            <ToC.Link>
              Introdução
            </ToC.Link> 
          </ToC.Section>
        </ToC.Root>
      </aside>
      <section className='flex-1 flex flex-col items-center'>
        {!isFetching && document && <Editor content={initialContent} />}
      </section>
    </main>
  )
}
  
  