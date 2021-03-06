import React, { useState } from "react";

const PreviewInputImg = () => {
    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);
    const onChangePicture = e => {
        if (e.target.files[0]) {
            console.log("picture: ", e.target.files);
            setPicture(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    return (
        <div>

            <div className="register_wrapper">
                <div className="register_player_column_layout_one">
                    <div className="register_player_Twocolumn_layout_two">
                        <form className="myForm">
                            <div className="formInstructionsDiv formElement">
                                <div className="register_profile_image">
                                    <input id="profilePic" type="file" onChange={onChangePicture} />
                                    <div className="previewProfilePic">
                                        <img className="playerProfilePic_home_tile" src={imgData} />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PreviewInputImg;