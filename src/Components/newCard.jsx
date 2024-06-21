import React from 'react';
import Card from 'react-bootstrap/Card';
function newCards({data}) {
  return (
    <>
            {
                data.map((element, k) => {
                    return (
                        <>
                            <Card style={{ width: '22rem',border:"none" }} className="hove mb-4">
                                <Card.Img variant="top" className='cd' src={element.imgdata} />

                                <div className="card_body">
                                    <div className="upper_data d-flex justify-content-between align-items-center">
                                        <h4 className='mt-2'>{element.rname}</h4>
                                        <span>{element.rating}&nbsp;★</span>
                                    </div>

                                    <div className="lower_data d-flex  justify-content-between">
                                        <h5>{element.address}</h5>
                                        <span>{element.price}</span>
                                    </div>


                                    <div className="extra"></div>

                                    <div className="last_data d-flex justify-content-between align-items-center">
                                        <p>{element.arrimg}</p>
                                        <p>{element.somedata}</p>
                                        <p>{element.delimg} </p>
                                    </div>
                                </div>

                            </Card>
                        </>
                    )
                })
            }

        </>
  )
}

export default newCards;