import React, { Fragment } from "react";
import "./index.css";
import { Menu, Transition } from "@headlessui/react";
import ScrollToTop from "../ScrollToTop";
import logo from "../../logo.webp";

export default function Layout({ children }) {
  const currentYear = new Date().getFullYear();
  return (
    <div className="h-auto bg-light">
      <nav
        className="navbar navbar-expand-lg navbar-dark pt-3 sticky-top"
        id="nav"
      >
        <div className="container-fluid navbar">
          <div className="flex">
            <a href="/" className="mx-2">
              <img
                src={logo}
                className="h-10 w-10"
                loading="lazy"
                alt="logo"
                height="40"
                width="40"
              />
            </a>
            <a href="/" className="my-auto mx-2">
              <span>Lantern Festival</span>
            </a>
          </div>
          <button
            className="navbar-toggler border-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              ></path>
            </svg>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Lantern Festival
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                id="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"
                  />
                </svg>
              </button>
            </div>
            <div className="offcanvas-body w-full pt-0">
              <ul
                className="navbar-nav justify-center flex-grow-1"
                id="nav-links"
              >
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/about">
                    About Us
                  </a>
                </li>

                <li className="nav-item my-auto py-2" id="dropdown">
                  <Menu
                    as="div"
                    className="relative inline-block text-left flex align-center"
                  >
                    <div className="dropdown-container">
                      <Menu.Button className="flex justify-center w-full">
                        Lantern Festival
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 my-auto arrow-down"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="rounded-md mt-7.5 absolute left-0 mt-4.5 w-56 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="rounded-lg inner-dropdown">
                          <Menu.Item>
                            {() => (
                              <a
                                href="/festival/about"
                                className="block px-4 py-2 text-sm"
                              >
                                About
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {() => (
                              <a
                                href="/festival/recipes"
                                className="block px-4 py-2 text-sm"
                              >
                                Recipe
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {() => (
                              <a
                                href="/events"
                                className="block px-4 py-2 text-sm rounded-b-md"
                              >
                                Events
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/sources">
                    Sources
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/ref">
                    References
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="body">{children}</div>
      <footer className="z-10">
        <div className="z-10 max-w-7xl mx-auto py-4 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="z-10 flex justify-center space-x-6 md:order-2 bg-transparent">
            <a
              href="https://github.com/leocabbage2008/tsa-react"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base">
              &copy; {currentYear} The Whale Like Sheep.
            </p>
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  );
}
