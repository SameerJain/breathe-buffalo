import { Icon } from '@iconify/react' //bring in Icon component from iconify library 
import locationIcon from '@iconify/icons-mdi/fire-alert' //import the specific fire logo 
const header = () => {
  return (
    <header className="header">
        <h1><Icon icon ={locationIcon} /> UB Air Quality Buddy </h1>
    </header>
  )
}

export default header