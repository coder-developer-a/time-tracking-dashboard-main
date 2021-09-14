import React from 'react'
import './Item.css';
import workIcon from './assets/icon-work.svg';
import playIcon from './assets/icon-play.svg';
import studyIcon from './assets/icon-study.svg';
import exerciseIcon from './assets/icon-exercise.svg';
import socialIcon from './assets/icon-social.svg';
import selfcareIcon from './assets/icon-self-care.svg';

const Item = ({ title, timeframes, timeline }) => {
    let iconName = title;
    let backgroundColor = '';
    switch (iconName) {
        case 'Work':
            iconName = workIcon;
            backgroundColor = '--orange';
            break;
        case 'Play':
            iconName = playIcon;
            backgroundColor = '--softBlue';
            break;
        case 'Study':
            iconName = studyIcon;
            backgroundColor = '--lightRed';
            break;
        case 'Exercise':
            iconName = exerciseIcon;
            backgroundColor = '--limeGreen';
            break;
        case 'Social':
            iconName = socialIcon;
            backgroundColor = '--violet';
            break;
        case 'Self Care':
            iconName = selfcareIcon;
            backgroundColor = '--softOrange';
            break;
        default:
            iconName = '';
            backgroundColor = '';
            break;
    }
    console.log(iconName)
    return (
        <div className='item' style={{backgroundImage: `url(${iconName})`,backgroundColor: `var(${backgroundColor})`}}>
            <div className='item-info'>
                <div className='item-info-top'>
                    <span className='font-weight-500'>{title}</span>
                    <span className='font-weight-500 dots'>&middot; &middot; &middot;</span>
                </div>
                <div className='item-info-main'>
                    <span className='font-weight-300 set-font-size-hrs'>{timeline.current}hrs</span>
                    <span className='font-weight-300 font-color-paleblue'>Last {timeframes} - {timeline.previous}hrs</span>
                </div>
            </div>
        </div>
    )
}

export default Item
