import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";
import Thankyoumodal from "../modal/Thankyoumodal";
import ErrorModal from "../modal/ErrorModal";

const EMAIL_API_BASE_URL =
  process.env.REACT_APP_EMAIL_API_BASE_URL ||
  "https://wapparels-email-server-nu.vercel.app";
const CONTACT_URL = `${EMAIL_API_BASE_URL}/contact-email`;
const REQUEST_TIMEOUT_MS = 10000;

const readResponseBody = async (response) => {
  const responseText = await response.text();

  if (!responseText) {
    return {};
  }

  try {
    return JSON.parse(responseText);
  } catch {
    throw new Error(
      `Server returned an invalid response (${response.status}).`,
    );
  }
};

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const activeRequestRef = useRef(null);

  useEffect(() => {
    return () => {
      activeRequestRef.current?.abort();
    };
  }, []);

  const handleClick = () => {
    setOpen(false);
  };

  const handleClickError = () => {
    setOpenError(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const form = event.currentTarget;
    const controller = new AbortController();
    const timeoutId = window.setTimeout(
      () => controller.abort(),
      REQUEST_TIMEOUT_MS,
    );

    const emaildata = {
      name: form.elements.name.value.trim(),
      email: form.elements.email.value.trim(),
      subject: form.elements.subject.value.trim(),
      message: form.elements.message.value.trim(),
    };

    activeRequestRef.current = controller;
    setOpen(false);
    setOpenError(false);
    setIsSubmitting(true);

    try {
      const response = await fetch(CONTACT_URL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(emaildata),
        signal: controller.signal,
      });

      const data = await readResponseBody(response);

      if (!response.ok) {
        throw new Error(
          data.message || `Request failed with status ${response.status}.`,
        );
      }

      form.reset();
      setOpen(true);
    } catch (error) {
      if (error.name === "AbortError") {
        console.error("Contact request timed out or was cancelled.");
      } else {
        console.error("Contact request failed:", error);
      }

      setOpenError(true);
    } finally {
      window.clearTimeout(timeoutId);

      if (activeRequestRef.current === controller) {
        activeRequestRef.current = null;
      }

      setIsSubmitting(false);
    }
  };

  return (
    <div id="contactus" className=" bg-base-200 lg:p-20 font-Nunito">
      <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-start">
        <div className="p-5 lg:p-0 lg:text-left">
          <h1 className="lg:text-5xl text-2xl md:text-3xl font-bold text-primary">
            Contact Us
          </h1>
          <p className="pt-6">
            W. Apparels Ltd. 295 JA/ 4 Rayer Bazar, Dhaka 1209
            <br />
            Phone: +8802 9181198,
            <br /> Email: info@wapparels.com
          </p>
          <div className="font-bold">
            <h1>Follow us on:</h1>
          </div>
          <div className="flex flex-row my-4 ">
            <Link to="https://www.linkedin.com/company/w-apparels-ltd/">
              <div className="mx-3">
                <div className="flex justify-center">
                  <div>
                    <i className="fa fa-brands fa-linkedin bg-gray-700 text-white py-1 px-[5px] rounded" />
                  </div>
                </div>
              </div>
            </Link>
            <Link to="https://www.facebook.com/profile.php?id=100063651540871">
              <div className="me-3">
                <div className="flex justify-center">
                  <div>
                    <i className="fa fa-brands fa-facebook bg-gray-700 text-white py-1 px-[8px] rounded" />
                  </div>
                </div>
              </div>
            </Link>
            <Link>
              <div className="me-3">
                <div className="flex justify-center">
                  <div>
                    <i className="fa fa-brands fa-instagram bg-gray-700 text-white py-1 px-[6px] rounded" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="lg:me-12 ">
            <iframe
              className="
            w-full h-[100px]
            lg:w-[550px] lg:h-[300px] mb-5"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=W apparels&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              title="W. Apparels location"
            ></iframe>
          </div>
        </div>
        <div className="card flex-shrink-0 lg:w-1/2 w-[90%] max-w-xl shadow-2xl bg-base-100 mb-5">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                name="name"
                type="text"
                className="input input-bordered"
                required
                maxLength={100}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                name="email"
                type="email"
                className="input input-bordered"
                required
                maxLength={254}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Subject</span>
              </label>
              <input
                name="subject"
                type="text"
                className="input input-bordered"
                required
                maxLength={150}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Message</span>
              </label>
              <textarea
                name="message"
                className="textarea textarea-bordered"
                required
                maxLength={5000}
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span
                      className="loading loading-spinner loading-sm"
                      aria-hidden="true"
                    ></span>
                    SENDING...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Thankyoumodal open={open} handleClick={handleClick} />
      <ErrorModal openError={openError} handleClickError={handleClickError} />
    </div>
  );
};

export default Contact;
