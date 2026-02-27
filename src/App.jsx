import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

import { Navbar, Welcome, Dock, Home } from '#components';
import { Resume, Safari, Terminal, Finder, Text, ImageFile, Contact, Trash } from '#windows';

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
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
    </main>
  )
}

export default App