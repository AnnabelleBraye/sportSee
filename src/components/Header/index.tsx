const Header = () => {
  return (
    <header className="flex bg-black text-white font-medium relative gap-24 z-10">
      <img src='/src/assets/svg/logo.svg' alt="logo" className="h-15 ml-7 my-4" />
      <ul className="flex justify-around w-full items-center text-2xl">
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglages</li>
        <li>Communauté</li>
      </ul>
    </header>
  )
}

export default Header;