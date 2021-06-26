import React from "react";

import "./PrintBooklet.css";

class PrintBooklet extends React.PureComponent {
  render() {
    const { bookLet } = this.props;
    return (
      <>
        <div className="pdf-container">
          {bookLet.map((cord) => (
            <>
              {cord.front.first.slide !== "" || cord.front.third.slide !== "" || cord.back.second.slide !== ""  ||
              cord.back.fourth.slide !== ""? (
                <>
                  <div className="pdf-first-cord">
                    <p className="pdf-content">{cord.back.fourth.para}</p>
                    <p className="page-bottom"> 
                      {cord.back.fourth.isCover
                        ? cord.back.fourth.type
                        : cord.back.fourth.slide - 2 > 0
                        ? cord.back.fourth.slide - 2
                        : ""}
                    </p>
                  </div>
                  <div className="pdf-second-cord">
                    {
                    !cord.front.first.isCover ? (
                      <p className="pdf-content" >{cord.front.first.para}</p>
                    ) : (
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <h1 className="pdf-title pdf-content">
                          {cord.front.first.title}
                        </h1>
                        <h3 className="pdf-subtitle">
                          {cord.front.first.subtitle}
                        </h3>
                      </div>
                    )}
                    <p className="page-bottom ">
                      {" "}
                      {cord.front.first.isCover
                        ? cord.front.first.type
                        : cord.front.first.slide - 2 > 0
                        ? cord.front.first.slide - 2
                        : ""}
                    </p>{" "}
                  </div>
                  <div className="pdf-third-cord">
                    <p className="pdf-content">{cord.back.second.para}</p>
                    <p className="page-bottom"> {console.log(cord.front)}
                      {cord.back.second.isCover
                        ? cord.back.second.type
                        : cord.back.second.slide - 2 > 0
                        ? cord.back.second.slide - 2
                        : ""}
                    </p>{" "}
                  </div>
                  <div className="pdf-fourth-cord">
                    <p className="pdf-content">{cord.front.third.para}</p>
                    <p className="page-bottom ">
                      {cord.front.third.isCover
                        ? cord.front.third.type
                        : cord.front.third.slide - 2 > 0
                        ? cord.front.third.slide - 2
                        : ""}
                    </p>{" "}
                  </div>
                </>
              ) : (
                ""
              )}

              {cord.back.first.slide !== "" || cord.back.third.slide !== ""  ||
              cord.front.second.slide !== "" || cord.front.fourth.slide !== ""? (
                <>
                 <div className="pdf-first-cord">
                    <p className="pdf-content">{cord.front.second.para}</p>
                    <p className="page-bottom ">
                      {" "}
                      {cord.front.second.isCover
                        ? cord.front.second.type
                        : cord.front.second.slide - 2 > 0
                        ? cord.front.second.slide - 2
                        : ""}
                    </p>{" "}
                  </div>

                  <div className="pdf-second-cord">
                    <p className="pdf-content">{cord.back.third.para}</p>
                    <p className="page-bottom">
                      {cord.back.third.isCover
                        ? cord.back.third.type
                        : cord.back.third.slide - 2 > 0
                        ? cord.back.third.slide - 2
                        : ""}
                    </p>
                  </div>

                  <div className="pdf-third-cord">
                    <p className="pdf-content">{cord.front.fourth.para}</p>
                    <p className="page-bottom ">
                      {cord.front.fourth.isCover
                        ? cord.front.fourth.type
                        : cord.front.fourth.slide - 2 > 0
                        ? cord.front.fourth.slide - 2
                        : ""}
                    </p>{" "}
                  </div>
             
                  <div className="pdf-fourth-cord">
                    <p className="pdf-content">{cord.back.first.para}</p>
                    <p className="page-bottom">
                      {cord.back.first.isCover
                        ? cord.back.first.type
                        : cord.back.first.slide - 2 > 0
                        ? cord.back.first.slide - 2
                        : ""}
                    </p>{" "}
                  </div>
                
                </>
              ) : (
                ""
              )}
            </>
          ))}
        </div>
      </>
    );
  }
}

export default PrintBooklet;
