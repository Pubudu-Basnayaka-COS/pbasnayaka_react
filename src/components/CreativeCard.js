import { render } from 'react-dom'
import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const slides = [
    { id: 0, url: 'https://pbasnayaka.com/sites/default/files/styles/style_web_work_thumbnail/public/2019-09/cow.jpg?h=b75af4a6&itok=rKGkG7ms' },
    { id: 1, url: 'https://pbasnayaka.com/sites/default/files/styles/style_web_work_thumbnail/public/2019-09/2.jpg?h=e09954a2&itok=7iZ7N8B6' },
    { id: 2, url: 'https://pbasnayaka.com/sites/default/files/styles/style_web_work_thumbnail/public/2019-09/11.jpg?h=96c5bfdb&itok=DLw5QHe1' },
    { id: 3, url: 'https://pbasnayaka.com/sites/default/files/styles/style_web_work_thumbnail/public/2019-09/3_0.jpg?h=eebd6862&itok=vGClVcS7' },
]

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


const CreativeCard = (props) => {
    const calc = (x, y) => [-(y - window.innerHeight / 2) / 60, (x - window.innerWidth / 2) / 100, 1.05]
    const trans = (x, y, s) => `perspective(320px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
    const [cardprops, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 3, tension: 300, friction: 40 } }))
  const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        //see https://reactjs.org/docs/events.html#touch-events for touch events
        <div>
            <div className="modal-button" type="button" onClick={handleOpen}>
         <animated.div
                            class="cool-card"
                            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                            onTouchMove ={({ touches: touch }) => set({ xys: calc(touch[0].clientX, touch[0].clientY) })}
                            onTouchEnd = {() => set({xys: [0, 0, 1]})}
                            onMouseLeave={() => set({xys: [0, 0, 1]})}
                            style={{ transform: cardprops.xys.interpolate(trans), backgroundImage: `url(${props.imageUrl})` }}
                            aria-label={props.altText}
                        />            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        modal content
                    </div>
                </Fade>
            </Modal>
        </div>

    )

}

export default CreativeCard;
