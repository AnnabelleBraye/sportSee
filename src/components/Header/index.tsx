const Header = () => {
  return (
    <header className="flex bg-black text-white font-medium relative gap-24 z-10">
      <img src='/src/assets/svg/logo.svg' alt="logo" className="h-15 ml-7 mt-4 mb-3" />
      <ul className="flex justify-around items-center w-full text-2xl">
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglages</li>
        <li>Communauté</li>
      </ul>
    </header>
  )
}

export default Header;