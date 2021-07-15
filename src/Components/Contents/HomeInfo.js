import React from 'react';

const HomeInfo = () => {
    return(
        <div className="home-info">
            <div className="intro">
                <div className="intro-box">
                    <h2 className="intro-title">Welcome To TM4Web!</h2>
                    <p>
                        The TM4Web interface is designed to provide your trucking company a unique online presence, which will enable you to keep in touch with your most valuable resource - the customer. You can now offer your valued clients enhanced customer service over the Web that allows them in track current shipments and request your services 24 hours a day.
                    </p>
                </div>
                <div className="horizontal-flex">
                    <div className="tracing-box">
                        <h4>Tracing</h4>
                        <p>
                            Providing your customers with details about the status of their shipments has always been a time consuming process for your employees. With TM4Web your customers can instantly get access to delivery information that is crucial to their business while your dispatch team can concentrate on planning new loads. Your clients can easily track the status of their current shipments online using the information specific to a freight bill.
                        </p>
                    </div>
                    <div className="pickup-box">
                        <h4>Pickup Request</h4>
                        <p>
                            Traditionally to process a requested pickup you needed to have someone available to speak directly to the customer, get all the information you need, manually enter this information, and phone the client back to confirm the pickup details. With TM4Web this intricate process can be completed online 24 hours a day. Your clients can enter requested pickup details like the delivery time needed, the exact type and quantity of freight, the temperature requirements of the freight and even requests for specific equipment. The information entered by a client is then available for your trucking company to accept directly into TruckMate for Windows and a notification can be sent to your client.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeInfo;