import { AppBar } from './component/AppBar'
import { MainComponent } from './component/MainComponent'
import { ProjectComponent } from './component/ProjectComponent'
import { SkillComponent } from './component/SkillComponent'
import { LinkComponent } from './component/Link'
import { ContactMe } from './component/ContactMe'
function App() {
  return (
    <>
      <AppBar />
      <MainComponent />
      <SkillComponent />
      <ProjectComponent />
      <LinkComponent />
      <ContactMe />
    </>
  )
}

export default App
