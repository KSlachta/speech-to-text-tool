import React from 'react'
import Radium from 'radium'

import Button from './Button'
import CredentialsModal from './CredentialsModal'
import Styles from './Styles'
import Strings from './Strings'

@Radium
export default class TitleBar extends React.Component {
    render() {
        var filter = {
            position: 'absolute',
            background: Styles.colorPrimary,
            mixBlendMode: 'screen',
            width: '60px',
            height: '60px',
            float: 'left',
        }

        var logo = {
            height: '60px',
            float: 'left',
        }

        var title = {
            font: Styles.fontTitle,
            color: Styles.colorTextDark,
        }

        var right = {
            font: Styles.fontDefault,
            color: Styles.colorTextLight,
        }

        var shadowWrapper = {
            zIndex: '1000',
            boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1)',
            position: 'fixed',
            top: '0px',
            left: '0px',
            right: '0px',
            background: '#fff',
            height: '65px',
        }

        var contentWrapper = {
            maxWidth: '1000px',
            width: '100%',
            height: '100%',
            margin: 'auto',
            display: 'flex',
            lineHeight: '65px',
            alignItems: 'center',
        }

        return (
            <div style={shadowWrapper}>
                <div style={contentWrapper}>
                    <img src="/watson_color.png" style={logo}></img>
                    <div style={[title, {flex: 'none', marginRight: 'auto'}]}>{Strings.visual_recognition_tool}</div>

                    <div style={[right, {
                            minWidth: '0px',
                            marginLeft: '20px',
                            display: 'flex'}]}>
                            <div style={{
                                    whiteSpace:'nowrap',
                                    overflow:'hidden',
                                    textOverflow:'ellipsis'}}>
                                User: {localStorage.getItem('username') || "Unknown"} &nbsp;&nbsp;
                            </div>
                    </div>
                    <Button style={{display: 'flex', flex: 'none'}} id='button--base--update-api-key' onClick={this.props.showModal} text={Strings.update_key_button}/>
                </div>
            </div>
        )
    }
}
