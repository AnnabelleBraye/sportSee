const Footer = () => {
  return (
    <footer className="bg-black text-white h-full fixed top-0 left-0 z-0">
      <div className="flex flex-col h-full m-7 gap-5 justify-center">
        <img src='/src/assets/svg/icon1.svg' alt='Icône 1' />
        <img src='/src/assets/svg/icon2.svg' alt='Icône 2' />
        <img src='/src/assets/svg/icon3.svg' alt='Icône 3' />
        <img src='/src/assets/svg/icon4.svg' alt='Icône 4' />
      </div>
      <p className="absolute bottom-0 left-0 mx-12 mb-14 text-xs font-medium vertical-text">Copyright, sportSee 2020</p>
    </footer>
  )
}

export default Footer;