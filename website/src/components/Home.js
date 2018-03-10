import React from 'react';

import Content from '../components/Content';

const Home = () => (
    <div className="contentSection">
        <div className="contentWrapper">
            <Content
                image="https://images.pexels.com/photos/433539/pexels-photo-433539.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
                backgroundColor="rgba(0,0,0,0.5)"
                color="white">
                <h1>Welcome to Lee Mac</h1>
                <p>LEE MAC provides a comforting, yet stimulating, atmosphere in
                  which customers will be able to relax their body, mind and
                  spirit, reconnecting their daily lives to their true purpose
                  through a wide range of holistic methods including massage,
                  facial, body works, energy works, and medical aesthetic and
                  anti-aging procedures. At LEE MAC, we drive for high customer
                  satisfaction and deliver results with excellent services.
                </p>
                <button className="white">Learn More</button>
            </Content>

            <div className="gridLayout threeGrid">
                <Content
                  color="white">
                    <h2>Thermage</h2>
                    <p>Thermage is a non-invasive procedure that can help tighten and contour your skin without injections or surgery. Thermage employs radiofrequency technology to heat the deep layers of skin while keeping the top layer cool and undamaged.</p>
                    <button className="white">More</button>
                </Content>
                <Content
                  color="white">
                    <h2>Intense Pulse Light (IPL)</h2>
                    <p>A photofacial method of photo rejuvenation that improves your skin's texture, tone and appearance.</p>
                    <button className="white">More</button>
                </Content>
                <Content
                  color="white">
                    <h2>Botox</h2>
                    <p>BOTOX® Cosmetic is an injection administered to muscles in the forehead to reduce the appearance of moderate to severe frown lines between the eyebrows. BOTOX® Cosmetic is a prescription medication that blocks nerve impulses to the muscles between the brows, reducing wrinkle-causing muscle activity.</p>
                    <button className="white">More</button>
                </Content>
            </div>
            <Content
                backgroundColor="rgba(255,255,255,0.1)"
                minHeight="auto">
                <div>
                <div>
                <img className="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAO2SURBVHhe7d3NS1RhFMdxM8EwS4q2vZFEtmgZgpQE0SYIW7QJgv6AWrjoZVetWropob1t3JWriMgSapEUtqigF2gbVqSQYDH2vd4j0aBzx/s8czsz9/eBwzW895x5zi+YjNI2ERERERGpS6VS6VxaWtpW1uL8m20V/wcvYgcvYph6TM3y69JjD/PUCz68znWfraqxGNZOXWXg9+RFyOrYzyJ1mw+7bXXxMWALdT8dKfVgXzPUblthPPTeSON76RhZD/b2jkuPrTIOml5O20tO47bKcDRL3sB/pH0lD/aX6LeVhqHRsPWVAOxxzFYahl6TaUsJQSDfuHTYWvOjkb7OiIRd7rW15kOD5CtwiYR9Dthq86FHT9pKYiCQk7bafOihQCJSIM4oEGcUiDMKxBkF4owCcUaBOKNAMrCgn9QnPpzm+pL6TC2mn42P3gqkGkuZoi5SO+2Y/+CWDj53iLpEPUmfioN+CmQFy/iYZyE8c5h6Y22CKJC/JllG7n+qw7Oj1ieIAgFLeMqly46UiwKJhAXMUau+V6yHAomEBVywowRRIBFw+Fmq044SRIFEwOFH7BjBFEgEHP6oHSOYAgnEwX9xWdefrHhmK9VHDVCneP7MSvHrB1yD0ae0gczYETJx70HqIfXbHm+YMgcyYUeoifu2U1/ssYYrcyB1/StBbj2fPlGMMgcyakeoifuu2SOFUCAZuO+mPVIIBZJBgRREgTijQJxRIAXjYO+pOzXqrB2hJu47XfXcWpX8P8Fg9GnZQO7aSywE86ZsdBAFEgHj2pk3n04Oo0AiYFafjQ2mQCJg1jkbG0yBRMCsERsbTIFEwKwob+gJBRKIUdHe0BMKJBBzor2hJxRIIOZEe0NPtHIgr6grNeqEHaEm7huseq66HtnIKOjXmoFk4eD6uyxPFIgzCsQZBeKMAnFGgTijQJxRIM4oEGcUiDMKxBkF4owCcUaBOKNAnFEgzigQZxSIMwrEGQXijAJxRoE408qBdKWtmovjQI7Z6PxoMmf9mobjQPbb6PzoM522ax4eA2HWApdNNjo/Gt1IWzYPp4HU9Q1xMtGol2rYd3tuBI+BYMjGhuOF37KmTcFbIMx5xmWDjQ1Hs26avl7u3gR4rR+4jGcV973l2lDMSL4ZZ6+tMh567yriAK2EfX2ljtgK42NG8oVi8jursjxR1sSKnlPF/KB7BvVTY1Ty40TFsI8FaoIPh6h47xn1YmgHtYcXMcD1eFmL8w9yPcA1yjduFhERERERKU5b2x8W/+mL3E3waAAAAABJRU5ErkJggg=="/>
                <img className="icon" src="data:image/png;base64,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"/>
                <img className="icon" src="data:image/png;base64,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"/>
                <img className="icon" src="data:image/png;base64,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"/>
                </div>
                </div>
            </Content>
        </div>
    </div>
);

export default Home;
