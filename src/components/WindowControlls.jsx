import useWindowStore from './store/window'

const WindowControlls = ({target}) => {
    const { closeWindow, minimizeWindow, maximizeWindow } = useWindowStore();

  return (
    <div id="window-controls">
        <div className="close" onClick={() => closeWindow(target)}/>
        <div className='minimize' onClick={() => minimizeWindow(target)}/>
        <div className='maximize' onClick={() => maximizeWindow(target)}/>
    </div>
  )
}

export default WindowControlls;