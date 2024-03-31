import React from "react";
import "./MentorLogin.css";
const MentorLogin = () => {
  return (
    <>
      <main className="main">
        <div className="background">
          {/* <img src="https://mentor.preplaced.in/static/media/AbstractLines.240653cd4ac96bda988700665b81fc3a.svg" alt="abstract-lines" /> */}
          <div className="logo-container">
            <img src=" " alt="" className="logo" />
          </div>
          <div className="content-container">
            <div className="content">
              <div className="emoji-container">
                <img
                  src="https://mentor.preplaced.in/static/media/Stars.6a4a45cb419614ca71eda3a119a28584.svg"
                  alt="onboarding-emoji"
                  className="emoji"
                />
              </div>
              <div className="text">
                <p className="p-text">
                  This is where your glorious mentoring journey begins
                </p>
              </div>
              <div className="mentor-container">
                <div>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/preplaced-upload-prod/o/image%2Fmentor-profile%2FManish%20Pushkar0.9941042546741938?alt=media&amp;token=d354c187-8be7-4314-9218-4646fd96839e"
                    alt="mentor"
                    className="mentor"
                  />
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/preplaced-upload-prod/o/image%2Fmentor-profile%2FIMG_4203.jpeg?alt=media&amp;token=053d4ec6-40de-4612-bd8c-28c68d6204ed"
                    alt="mentor"
                    className="mentor-left"
                  />
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/preplaced-upload-prod/o/image%2Fmentor-profile%2Fphoto_white_background.png?alt=media&amp;token=39d8958c-2d1e-493a-ad49-fdee80a8f539"
                    alt="mentor"
                    className="mentor-left"
                  />
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/preplaced-upload-prod/o/image%2Fmentor-profile%2FDrishti.jpeg?alt=media&amp;token=16b017f8-140d-494c-a539-98ec8a73254c"
                    alt="mentor"
                    className="mentor-left"
                  />
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/preplaced-upload-prod/o/image%2Fmentor-profile%2Fphoto%20fb.jpg?alt=media&amp;token=68e49c0f-c058-4d9b-b4b4-ac223ef8f3fc"
                    alt="mentor"
                    className="mentor-left"
                  />
                </div>
                <p>Join 200+ Mentors</p>
              </div>
            </div>
          </div>
        </div>
        <div className="form-container">
          <img
            src="https://mentor.preplaced.in/static/media/preplaced-logo-black-large.b3c00ca7fb8c1a90e57902ea572cbe11.svg"
            alt="preplaced"
          />
          <div className="form">
            <h2 className="text-2">Sign up/Sign in</h2>
            <div className="button-container">
              <button className="btn-1">
                <img
                  src="https://mentor.preplaced.in/static/media/google-logo.da1e4544f1cb0cab13d9a0397f929149.svg"
                  alt="apple"
                />
                Continue with Google
              </button>
              <button className="btn-2">
                <img
                  src="https://mentor.preplaced.in/static/media/mail-logo.b9ce3d6854ff905cb85207a2f0bc990e.svg"
                  alt="google"
                />
                Continue with Email
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MentorLogin;