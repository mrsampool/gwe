// React
import React from "react";

// Data
import curriculum from "../../../data/curriculum/curriculum";

// Style Sheet
import "./sessionJump.css";
import pageText from "../../../data/pageText";

export const sessionIcons = {
  book: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="bi bi-book"
         viewBox="0 0 16 16">
      <path
        d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
    </svg>
  ),
  discussion: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-chat-quote"
         viewBox="0 0 16 16">
      <path
        d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
      <path
        d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
    </svg>
  ),
  experiment: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="100.03 110.524 18.971 23.938">
      <g>
        <path d="M113.756,120.014c0-0.918-0.087-1.246-1.007-1.246h-6.469c-0.92,0-1.008,0.328-1.008,1.246h1.318v2.673
l-3.293,10.111c0,0.919,0.746,1.664,1.666,1.664h9.105c0.919,0,1.666-0.745,1.666-1.664l-3.281-10.14l-0.013-2.644H113.756
L113.756,120.014z M114.388,131.877c0.259,0.845-0.191,1.37-1.368,1.37h-6.998c-1.339,0-1.668-0.565-1.367-1.37l3.178-9.232
l-0.02-2.622l3.361-0.036v2.65L114.388,131.877z"/>
      </g>
      <path stroke-miterlimit="10" d="M106.596,130.904l1.529-4.688c0,0,0.531,0.831,1.33,0.931
	s1.53-0.033,1.829,0.632c0.299,0.665,1.13,3.125,1.13,3.125s0.532,0.898-0.598,0.898c-1.13,0-3.857,0-4.755,0
	S106.596,130.904,106.596,130.904z"/>
	<circle  stroke-miterlimit="10" cx="108.179" cy="116.494" r="1.097"/>
	<circle  stroke-miterlimit="10" cx="111.584" cy="112.948" r="1.622"/>
</svg>
  ),
  video: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera-reels"
         viewBox="0 0 16 16">
      <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
      <path
        d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z"/>
      <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
    </svg>
  ),

}

function SessionButton(props) {
  let material = props.materialData;
  let content = material.content;

  let sessionInfo = material.sessionInfo;
  let sessionId = sessionInfo.sessionId;
  let partNo = material.sessionInfo.partNo;
  let materialId = sessionInfo.materialId;

  function handleClick() {
    props.moveTrain([sessionId, partNo]);
  }

  return (
    <button
      onClick={handleClick}
      className={
        props.currentSession[0] === sessionId &&
        props.currentSession[1] === partNo
          ? "current"
          : ""
      }
    >
      {materialId}
      {sessionIcons[content.format] ? sessionIcons[content.format] : null}
    </button>
  );

}

export function SessionJump(props) {
  return (
    <div
      className={
        "tableContents d-flex flex-column align-items-center"
      }
    >
      <p className={"mr-2"}>{pageText.labels.jumpToSession.get(props.language)}:</p>

      <div className="sessionButtonsList d-flex flex-row flex-md-row justify-content-center align-items-center w-100 flex-wrap">

        {curriculum.sessions.map((session) => {
          return session.material.length > 1 ? (
            <div className={"materialWrap"}>
              {session.material.map((material) => {
                return (
                  <SessionButton
                    materialData={material}
                    moveTrain={props.moveTrain}
                    currentSession={props.currentSession}
                  />
                );
              })}
            </div>
          ) : (
            <SessionButton
              materialData={session.material[0]}
              moveTrain={props.moveTrain}
              currentSession={props.currentSession}
            />
          );
        })}
      </div>
    </div>
  );
}
