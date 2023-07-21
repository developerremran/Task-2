
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { GrView } from 'react-icons/gr';
import shearLinkIcon from '../../../images/Cards/shearIcon.png'


const TabCard = ({ post }) => {
    const { title, category, description, view, author, image } = post

    return (
        <div>
            <Card style={{ width: '90%', margin:'20px' }}>
                <Card.Img fluid variant="top" style={{ maxWidth: '100%', height: '300px' }} className='img-fluid' src={image} />
                <Card.Body>
                    <div className='d-flex justify-content-between'>
                        <Card.Title>{category}</Card.Title>
                        <span>...</span>
                    </div>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>

                <Card.Body className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-between align-items-center gap-2' >
                        <img src={author.image} className='rounded-circle border border-2 ' style={{ maxWidth: '50px', height: '50px' }} alt="" />
                        <h6>{author.name}</h6>
                    </div>

                    <div className='d-flex justify-content-between align-items-center gap-5'>
                        <div >
                            <span className='d-flex align-items-center gap-2 '><GrView></GrView>
                                {view}</span>
                        </div>
                        <div>
                            <img style={{ maxWidth: '30px' }} src={shearLinkIcon} alt="" />
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TabCard;