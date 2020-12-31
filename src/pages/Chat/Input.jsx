import React from 'react'

export default function Input({ setMessage, sendMessage, message }) {
    return (
        <div className="row">
            <div className="col">
                <div className="mt-2 bg-light p-3 rounded">
                    <form className="needs-validation" name="chat-form" id="chat-form">
                        <div className="row">
                            <div className="col mb-2 mb-sm-0">
                                <input
                                    className="form-control border-0"
                                    type="text"
                                    placeholder="Type a message..."
                                    value={message}
                                    onChange={({ target: { value } }) => setMessage(value)}
                                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null} />
                                <div className="invalid-feedback">Nhập nội dung tin nhắn</div>
                            </div>
                            <div className="col-sm-auto">
                                <div className="btn-group">
                                    {/* <a href="#" className="btn btn-light"><i className="uil uil-paperclip"></i></a> */}
                                    {/* <a href="#" className="btn btn-light"> <i className='uil uil-smile'></i> </a> */}
                                    <button className="btn btn-success chat-send btn-block"
                                        onClick={e => sendMessage(e)}
                                    ><i className='uil uil-message'></i>
                                    </button>
                                </div>
                            </div> {/*  end col  */}
                        </div> {/*  end row */}
                    </form>
                </div>
            </div>
        </div>
    )
}
