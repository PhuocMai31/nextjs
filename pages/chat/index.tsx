import React from 'react';
import styles from  './chat.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export interface PostPageAProps {

}

export default function Index (props : PostPageAProps){
    return (
        <>
        <div>
            <p className={styles.h5} style={{marginLeft: "4%"}}>Cuộc trò chuyện gần đây</p>
            <p className={styles.classify} style={{marginLeft: "70%", marginTop: "22px"}}>Phân loại <button className={styles.buttonClassify}></button></p>
            <Row>
                <Col sm={2}>
                    <img src={'pa.png'} className={styles.avatar}></img>
                </Col>
                <Col sm={8}>
                    <p>Mipanzuzu</p>
                    <p>Xin chào đây là tin union</p>
                </Col>
                <Col sm={2}>
                    jf
                </Col>
            </Row>
            <Row className={styles.chatRow}>
                <img src={'qt.png'} className={styles.avatar}></img>
            </Row>
            <Row className={styles.chatRow}>
                <img src={'avatar.png'} className={styles.avatar}></img>
            </Row>
            <Row className={styles.chatRow}>
                <img src={'avatar.png'} className={styles.avatar}></img>
            </Row>
            <Row className={styles.chatRow}>
                <Row>
                    <img src={'avatar.png'} className={styles.avatar}></img>
                </Row>
            </Row>
        </div>
        <div>
            <Row>
                <Col sm={2}>
                    <img src={'pa.png'} ></img>
                </Col>
                <Col sm={8}>
                    <p>Mipanzuzu</p>
                    <p>Xin chào đây </p>
                </Col>
            </Row>
        </div>
        </>
    )
}