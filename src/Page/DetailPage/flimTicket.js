import React from "react";
import "./filmTicket.scss";

function flimTicket() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-left col-lg-8">
          <div className="content">
            <div className="wrapper">
              <h2>Lịch chiếu Thám Tử Lừng Danh Conan: Nàng Dâu Halloween</h2>
              <div className="showtimes">
                <div className="schedule d-flex justify-content-start">
                  <div className="week flex-column d-flex justify-content-center align-items-center">
                    <span className="number d-flex justify-content-center align-items-center">
                      21
                    </span>
                    <span className="day">Thứ 2</span>
                  </div>
                  <div className="week flex-column d-flex justify-content-center align-items-center">
                    <span className="number d-flex justify-content-center align-items-center">
                      21
                    </span>
                    <span className="day">Thứ 3</span>
                  </div>
                  <div className="week flex-column d-flex justify-content-center align-items-center">
                    <span className="number d-flex justify-content-center align-items-center">
                      21
                    </span>
                    <span className="day">Thứ 4</span>
                  </div>
                  <div className="week flex-column d-flex justify-content-center align-items-center">
                    <span className="number d-flex justify-content-center align-items-center">
                      21
                    </span>
                    <span className="day">Thứ 5</span>
                  </div>
                  <div className="week flex-column d-flex justify-content-center align-items-center">
                    <span className="number d-flex justify-content-center align-items-center">
                      21
                    </span>
                    <span className="day">Thứ 6</span>
                  </div>
                  <div className="week flex-column d-flex justify-content-center align-items-center">
                    <span className="number d-flex justify-content-center align-items-center">
                      21
                    </span>
                    <span className="day">Thứ 7</span>
                  </div>
                  <div className="week flex-column d-flex justify-content-center align-items-center">
                    <span className="number d-flex justify-content-center align-items-center">
                      21
                    </span>
                    <span className="day">Chủ nhật</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-right col-lg-4">123</div>
      </div>
    </div>
  );
}

export default flimTicket;
