import React from 'react'
import { useMd } from '@/components/md-renderer'

interface IMarkdownRendererProps {
  content: string
}

const MdView = ({ content }: IMarkdownRendererProps) => {
  const { MdRenderer, TocSidebar } = useMd(content, true)

  return (
    <div className="flex flex-col-reverse w-full gap-10 xl:flex-row">
      {MdRenderer && <MdRenderer className="flex-1 max-w-[720px]" />}
      {TocSidebar && (
        <TocSidebar className="block xl:sticky top-0 overflow-y-auto h-full w-[312px] xl:border-l xl:border-muted pl-4" />
      )}
    </div>
  )
}

export default MdView
