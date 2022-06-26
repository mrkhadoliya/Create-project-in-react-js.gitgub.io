import React from 'react'
import PreviewInputImg from './PreviewInputImg';

const ListingItemUpload = () => {
    return (
        <div className='kdkhddddd'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className=''>
                            <h4>Photos</h4>
                            <p>Add as many as you can so buyers can see every detail.</p>
                        </div>
                    </div>
                </div>
                <div className='row py-4'>
                    <div className='col-md-3'>
                        <div className=''>
                            <h6>Photos *</h6>
                            <div>
                                <p className='natural'>Use up to ten photos to show your item's most important qualities.</p>
                            </div>
                            <div>
                                <h6>Tips:</h6>
                            </div>
                            <ul className=''>
                                <li><p className='natural'>Use natural light and no flash.</p></li>
                                <li><p className='natural'>Include a common object for scale.</p></li>
                                <li><p className='natural'>Show the item being held, worn, or used.</p></li>
                                <li><p className='natural'>Shoot against a clean, simple background.</p></li>
                                <li><p className='natural'>Add photos to your variations so buyers can see all their options.</p></li>

                            </ul>
                        </div>
                    </div>
                    <div className='col-md-9'>
                        <div className='uploadimages'>
                            <div className='d-flex flex-wrap'>
                                <div className='inputupload'>
                                    <div className="form-create-item">
                                        <PreviewInputImg />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListingItemUpload;