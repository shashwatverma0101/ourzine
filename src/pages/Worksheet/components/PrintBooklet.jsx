import React from "react";

import "./PrintBooklet.css";

class PrintBooklet extends React.PureComponent {
  render() {
    const { bookLet } = this.props;
    return (
      // <div className="printframe">
      //   <div className="printframebody">
      //     <ul>
      //       {bookLet?.map((cord) => (
      //         <>
      //           {cord.front.first.slide !== "" ? (
      //             <>
      //           <div className="page-break" />

      //             <li>
      //               <div
      //                 className="printgeneratelayout"
      //                 style={{ marginRight: "10px" }}
      //               >
      //                 {cord.front.first.slide ? (
      //                   <p
      //                     className="print-layout-para"
      //                   >
      //                     {cord.front.first.para}
      //                   </p>
      //                 ) : (
      //                   <>
      //                     <h2
      //                       style={{
      //                         whiteSpace: "pre-line",
      //                         fontWeight: "700",
      //                       }}
      //                     >
      //                       {cord.front.first.title}
      //                     </h2>
      //                     <p
      //                       style={{
      //                         whiteSpace: "pre-line",
      //                         fontWeight: "400",
      //                       }}
      //                     >
      //                       {cord.front.first.subtitle}
      //                     </p>
      //                   </>
      //                 )}

      //                 <div
      //                   style={{
      //                     position: "absolute",
      //                     bottom: "4px",
      //                     width: "100%",
      //                     left: "0px",
      //                   }}
      //                 >
      //                   {cord.front.first.isCover
      //                     ? cord.front.first.type
      //                     : cord.front.first.slide}
      //                 </div>
      //               </div>
      //               <div className = "verticalcenterline"></div>
      //               <div
      //                 className="printgeneratelayout"
      //                 style={{ borderRight: "0px" }}
      //               >
      //                 {cord.front.second.slide ? (
      //                   <p
      //                     className="print-layout-para"
      //                   >
      //                     {cord.front.second.para}
      //                   </p>
      //                 ) : (
      //                   <>
      //                     <h2
      //                       style={{
      //                         whiteSpace: "pre-line",
      //                         fontWeight: "700",
      //                       }}
      //                     >
      //                       {cord.front.second.title}
      //                     </h2>
      //                     <p
      //                       style={{
      //                         whiteSpace: "pre-line",
      //                         fontWeight: "400",
      //                       }}
      //                     >
      //                       {cord.front.second.subtitle}
      //                     </p>
      //                   </>
      //                 )}

      //                 <div
      //                   style={{
      //                     position: "absolute",
      //                     bottom: "4px",
      //                     width: "100%",
      //                     left: "0px",
      //                   }}
      //                 >
      //                   {cord.front.second.isCover
      //                     ? cord.front.second.type
      //                     : cord.front.second.slide}
      //                 </div>
      //               </div>

      //               <div className="thirdlayoutsheet">
      //               <div className = "verticalcenterline1"></div>
      //               <div
      //                 className="printgeneratelayout"
      //                 style={{
      //                   marginTop: "10px",
      //                   marginRight: "10px",
      //                   borderBottom: "0px",
      //                   width:'-webkit-fill-available'
      //                 }}
      //               >
      //                 {cord.front.third.slide ? (
      //                   <p
      //                     className="print-layout-para"
      //                   >
      //                     {cord.front.third.para}
      //                   </p>
      //                 ) : (
      //                   <>
      //                     <h2
      //                       style={{
      //                         whiteSpace: "pre-line",
      //                         fontWeight: "700",
      //                       }}
      //                     >
      //                       {cord.front.third.title}
      //                     </h2>
      //                     <p
      //                       style={{
      //                         whiteSpace: "pre-line",
      //                         fontWeight: "400",
      //                       }}
      //                     >
      //                       {cord.front.third.subtitle}
      //                     </p>
      //                   </>
      //                 )}

      //                 <div
      //                   style={{
      //                     position: "absolute",
      //                     bottom: "4px",
      //                     width: "100%",
      //                     left: "0px",
      //                   }}
      //                 >
      //                   {cord.front.third.isCover
      //                     ? cord.front.third.type
      //                     : cord.front.third.slide}
      //                 </div>
      //               </div>
      //               </div>
      //               <div
      //                 className="printgeneratelayout"
      //                 style={{
      //                   marginTop: "10px",
      //                   borderRight: "0px",
      //                   borderBottom: "0px",
      //                 }}
      //               >
      //                 {cord.front.fourth.slide ? (
      //                   <p
      //                     className="print-layout-para"
      //                   >
      //                     {cord.front.fourth.para}
      //                   </p>
      //                 ) : (
      //                   <>
      //                     <h2
      //                       style={{
      //                         whiteSpace: "pre-line",
      //                         fontWeight: "700",
      //                       }}
      //                     >
      //                       {cord.front.fourth.title}
      //                     </h2>
      //                     <p
      //                       style={{
      //                         whiteSpace: "pre-line",
      //                         fontWeight: "400",
      //                       }}
      //                     >
      //                       {cord.front.fourth.subtitle}
      //                     </p>
      //                   </>
      //                 )}

      //                 <div
      //                   style={{
      //                     position: "absolute",
      //                     bottom: "4px",
      //                     width: "100%",
      //                     left: "0px",
      //                   }}
      //                 >
      //                   {cord.front.fourth.isCover
      //                     ? cord.front.fourth.type
      //                     : cord.front.fourth.slide}
      //                 </div>
      //               </div>
      //             </li>
      //             </>
      //           ) : (
      //             ""
      //           )}

      //           {cord.back.first.slide !== "" ? (<>
      //             <div className="page-break" />

      //             <li>
      //               <div
      //                 className="printgeneratelayout"
      //                 style={{ marginRight: "10px" }}
      //               >
      //                 {cord.back.first.slide ? (
      //                   <p
      //                     className="print-layout-para"
      //                   >
      //                     {cord.back.first.para}
      //                   </p>
      //                 ) : (
      //                   <>
      //                     <h2
      //                       style={{
      //                         whiteSpace: "pre-line",
      //                         fontWeight: "700",
      //                       }}
      //                     >
      //                       {cord.back.first.title}
      //                     </h2>
      //                     <p
      //                       style={{
      //                         whiteSpace: "pre-line",
      //                         fontWeight: "400",
      //                       }}
      //                     >
      //                       {cord.back.first.subtitle}
      //                     </p>
      //                   </>
      //                 )}

      //                 <div
      //                   style={{
      //                     position: "absolute",
      //                     bottom: "4px",
      //                     width: "100%",
      //                     left: "0px",
      //                   }}
      //                 >
      //                   {cord.back.first.isCover
      //                     ? cord.back.first.type
      //                     : cord.back.first.slide}
      //                 </div>
      //               </div>
      //               <div className = "verticalcenterline" ></div>

      //               <div
      //                 className="printgeneratelayout"
      //                 style={{ borderRight: "0px" }}
      //               >
      //                 {cord.back.second.slide ? (
      //                   <p
      //                     className="print-layout-para"
      //                   >
      //                     {cord.back.second.para}
      //                   </p>
      //                 ) : (
      //                   <>
      //                     <h2
      //                       style={{
      //                         whiteSpace: "pre-line",
      //                         fontWeight: "700",
      //                       }}
      //                     >
      //                       {cord.back.second.title}
      //                     </h2>
      //                     <p
      //                       style={{
      //                         whiteSpace: "pre-line",
      //                         fontWeight: "400",
      //                       }}
      //                     >
      //                       {cord.back.second.subtitle}
      //                     </p>
      //                   </>
      //                 )}

      //                 <div
      //                   style={{
      //                     position: "absolute",
      //                     bottom: "4px",
      //                     width: "100%",
      //                     left: "0px"
      //                   }}
      //                 >
      //                   {cord.back.second.isCover
      //                     ? cord.back.second.type
      //                     : cord.back.second.slide}
      //                 </div>
      //               </div>
      //               <div className="thirdlayoutsheet">
      //               <div className = "verticalcenterline1"></div>
      //               <div
      //                 className="printgeneratelayout"
      //                 style={{
      //                   marginTop: "10px",
      //                   marginRight: "10px",
      //                   borderBottom: "0px",
      //                   width:"-webkit-fill-available"
      //                 }}
      //               >
      //                 {cord.back.third.slide ? (
      //                   <p
      //                     className="print-layout-para"
      //                   >
      //                     {cord.back.third.para}
      //                   </p>
      //                 ) : (
      //                   <>
      //                     <h2
      //                       style={{
      //                         whiteSpace: "pre-line",
      //                         fontWeight: "700",
      //                       }}
      //                     >
      //                       {cord.back.third.title}
      //                     </h2>
      //                     <p
      //                       style={{
      //                         whiteSpace: "pre-line",
      //                         fontWeight: "400",
      //                       }}
      //                     >
      //                       {cord.back.third.subtitle}
      //                     </p>
      //                   </>
      //                 )}

      //                 <div
      //                   style={{
      //                     position: "absolute",
      //                     bottom: "4px",
      //                     width: "100%",
      //                     left: "0px",
      //                   }}
      //                 >
      //                   {cord.back.third.isCover
      //                     ? cord.back.third.type
      //                     : cord.back.third.slide}
      //                 </div>
      //               </div>
      //               </div>
      //               <div
      //                 className="printgeneratelayout"
      //                 style={{
      //                   marginTop: "10px",
      //                   borderRight: "0px",
      //                   borderBottom: "0px",
      //                 }}
      //               >
      //                 {cord.back.fourth.slide ? (
      //                   <p
      //                     className="print-layout-para"
      //                   >
      //                     {cord.back.fourth.para}
      //                   </p>
      //                 ) : (
      //                   <>
      //                     <h2
      //                       style={{
      //                         whiteSpace: "pre-line",
      //                         fontWeight: "700",
      //                       }}
      //                     >
      //                       {cord.back.fourth.title}
      //                     </h2>
      //                     <p
      //                       style={{
      //                         whiteSpace: "pre-line",
      //                         fontWeight: "400",
      //                       }}
      //                     >
      //                       {cord.back.fourth.subtitle}
      //                     </p>
      //                   </>
      //                 )}

      //                 <div
      //                   style={{
      //                     position: "absolute",
      //                     bottom: "4px",
      //                     width: "100%",
      //                     left: "0px",
      //                   }}
      //                 >
      //                   {cord.back.fourth.isCover
      //                     ? cord.back.fourth.type
      //                     : cord.back.fourth.slide}
      //                 </div>
      //               </div>
      //             </li>
      //             </>
      //           ) : (
      //             ""
      //           )}
      //         </>
      //       ))}
      //     </ul>
      //   </div>
      // </div>

      <>
        <div className="pdf-container">
          <div className="pdf-first-cord">
            <p className = "pdf-content-">test</p>
            <p className = "page-bottom first-cord-bottom">Front Cover</p>
          </div>
          <div className="pdf-second-cord">
          <p className>test</p>
            <p className = "page-bottom second-cord-bottom">Front Cover</p>          </div>
          <div className="pdf-third-cord">
          <p className = "pdf-content-third">test</p>
            <p className = "page-bottom">Front Cover</p>          </div>
          <div className="pdf-fourth-cord">
          <p className = "pdf-content-fourth">test</p>
            <p className = "page-bottom ">Front Cover</p>          </div>

          <div className="pdf-first-cord">
            <p className>test</p>
          </div>
          <div className="pdf-second-cord">
            <p className>test</p>
          </div>
          <div className="pdf-third-cord">
            <p className>test</p>
          </div>
          <div className="pdf-fourth-cord">
            <p className>test</p>
          </div>

          <div className="pdf-first-cord">
            <p className>test</p>
          </div>
          <div className="pdf-second-cord">
            <p className>test</p>
          </div>
          <div className="pdf-third-cord">
            <p className>test</p>
          </div>
          <div className="pdf-fourth-cord">
            <p className>test</p>
          </div>
        </div>
      </>
    );
  }
}

export default PrintBooklet;
