import React from "react";
import "./Home3.css";

const Home3 = () => {
  return (
    <div className="ContainerMain">
      <div className="Container">
        <div className="Card">
          <div className="Box">
            <div className="Percent">
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="Number">
                <h2>
                  99<span>%</span>
                </h2>
              </div>
            </div>
            <h2 className="Text">SECURITY ASSURED</h2>
          </div>
        </div>

        <div className="Card">
          <div className="Box">
            <div className="Percent">
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="Number">
                <h2>
                  93<span>%</span>
                </h2>
              </div>
            </div>
            <h2 className="Text">Time Saved</h2>
          </div>
        </div>

        <div className="Card">
          <div className="Box">
            <div className="Percent">
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="Number">
                <h2>
                  98<span>%</span>
                </h2>
              </div>
            </div>
            <h2 className="Text">CUSTOMER SATISFACTION</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home3;
