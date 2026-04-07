import { cn } from '@/lib/utils'

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <span className='text-xl font-bold tracking-tight'>Kairos</span>
      <span className='text-muted-foreground text-sm font-medium hidden sm:inline'>Growth Advisors</span>
    </div>
  )
}

export default Logo
