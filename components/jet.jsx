import Image from 'next/image'
import jet from '../assets/jet.png'
import fire from '../assets/firefromjet.png'
import { useEffect, useState } from 'react';
import ControlButtons from './ControlButtons'
const Jet = () => {
    const [jetX, setjetX] = useState(400)
    const [jetY, setjetY] = useState(400)
    function left() {
        event.preventDefault();
        document.getElementById('jet-body').style.transform = 'rotate(' + (270) + 'deg)'
        document.getElementById('float').style.animation = "unset"
        const jet_style = getComputedStyle(document.getElementById('jet'))
        if (parseInt(jet_style.left) + jetX > 0) {
            setjetX(jetX - 10)
            document.getElementById('jet').style.transform =
                "translateY(" + (jetY) + "px) translateX(" + (jetX) + "px)"
        }
    }
    function right() {
        event.preventDefault();
        const jet_style = getComputedStyle(document.getElementById('jet'))
        document.getElementById('float').style.animation = "unset"
        document.getElementById('jet-body').style.transform = 'rotate(' + (90) + 'deg)'
        if (parseInt(jet_style.right) - jetX > 0) {
            setjetX(jetX + 10)
            document.getElementById('jet').style.transform =
                "translateY(" + (jetY) + "px) translateX(" + (jetX) + "px)"
        }
    }
    function down() {
        event.preventDefault();
        const jet_style = getComputedStyle(document.getElementById('jet'))
        document.getElementById('float').style.animation = "unset"
        document.getElementById('jet-body').style.transform = 'rotate(' + (180) + 'deg)'
        if (parseInt(jet_style.bottom) - jetY > 0) {
            setjetY(jetY + 10)
            document.getElementById('jet').style.transform =
                "translateY(" + (jetY) + "px) translateX(" + (jetX) + "px)"
        } else {
            window.scrollBy({
                top: 10,
                left: 0,
            });
        }
    }
    function up() {
        event.preventDefault();
        document.getElementById('jet-body').style.transform = 'rotate(' + (0) + 'deg)'
        document.getElementById('float').style.animation = "unset"
        const jet_style = getComputedStyle(document.getElementById('jet'))
        if (parseInt(jet_style.top) - jetY < 0) {
            setjetY(jetY - 10)
            document.getElementById('jet').style.transform =
                "translateY(" + (jetY) + "px) translateX(" + (jetX) + "px) "
        } else {
            window.scrollBy({
                top: -10,
                left: 0,
            });
        }
    }
    function onKeyDown(event) {
        if (event.keyCode == 40) {
            down()
        }
        if (event.keyCode == 39) {
            right()
        }

        if (event.keyCode == 37) {
            left()
        }

        if (event.keyCode == 38) {
            up()
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
        }
    }, [jetX, jetY])
    function onKeyUp() {
        if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
            document.getElementById('jetfire').style.display = 'none'
            document.getElementById('float').style.animation = "float 3s linear infinite alternate"
        }
    }
    useEffect(() => {
        document.addEventListener('keyup', onKeyUp);
        return () => {
            document.removeEventListener('keyup', onKeyUp);
        }
    }, [jetX, jetY])
    return (
        <>
            {/*added this div just to use postion relative */}
            <div className='fixed ' id="jet">
                {/* added div cause Image can't have styles and img don't work*/}
                <div id='jet-body' className='me '>
                    <div className='float' id="float">
                        <Image src={jet} />
                    </div>
                </div>
                <div id="jetfire" className='absolute hidden top-52 z-[-2] right-12'>
                    <Image src={fire} />
                </div>
            </div>
        </>
    )
}
export default Jet