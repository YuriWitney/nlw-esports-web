interface GameBannerProps {
  bannerUrl: string
  title: string
  adAmount: number
}

export function GameBanner(props: GameBannerProps) {
  return (
    <a href='' className='relative rounded-lg overflow-hidden'>
      <img src={props.bannerUrl} alt='' />

      <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
        <strong className='font-bold text-white block'>{props.title}</strong>
        <span className='font-zinc-300 text-sm text-white block'>{props.adAmount} anúncio(s)</span>
      </div>
    </a>
  )
}