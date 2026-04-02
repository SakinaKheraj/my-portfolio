import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

import { Navbar, Welcome, Dock, Home, MobileStatusBar, HomeIndicator } from '#components';
import { Resume, Safari, Terminal, Finder, Text, ImageFile, Contact, Trash } from '#windows';

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main className="relative w-dvw h-dvh overflow-hidden select-none">
      {/* Desktop macOS bar — hidden on mobile */}
      <Navbar />

      {/* Mobile status bar — hidden on desktop */}
      <MobileStatusBar />

      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Trash />
      <Text />
      <ImageFile />
      <Contact />
      <Home />

      {/* Mobile home indicator — hidden on desktop */}
      <HomeIndicator />
    </main>
  )
}

export default App