import React from 'react'

function Model(props) {
    const modelData = props.value
    console.log(modelData)
    return (
        <div>
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">{modelData?.alt_description}</h4>

                        </div>
                        <div className="modal-body">
                            <div className="card" >
                                <img className="card-img-top" src={modelData?.urls.small} alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">By {modelData?.user.name}</h4>
                                    <p>{modelData?.created_at}</p>
                                    <p>Location: {modelData?.user.location}</p>
                                    <p className="card-text">
                                        {modelData?.description}
                                    </p>
                                    <p>Instagram: @{modelData?.user.social.instagram_username}</p>

                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" >Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model