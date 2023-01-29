import React from "react";
import { Link } from "@innovaccer/design-system";
import "./FooterStyle.css";

const Footer = (): any => (
  <footer className="footer-section py-7">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        {/* Heading & desctiption of footer section */}
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">In-TODO</h5>
          <p className="mt-4">
            Better Planning in our daily schedule, make better world together.
          </p>
        </div>
        {/* Heading & description section End */}

        {/* Added Divider we used for separation between Heading & Links */}
        <hr className="clearfix w-100 d-md-none pb-0" />

        {/* This is for marketing section */}
        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Market</h5>
          <ul className="list-unstyled">
            <li>
              <Link href="#" size="tiny">
                Payers
              </Link>
            </li>
            <li>
              <Link href="#" size="tiny">
                Providers
              </Link>
            </li>
            <li>
              <Link href="#" size="tiny">
                Biopharma
              </Link>
            </li>
            <li>
              <Link href="#" size="tiny">
                MedTech
              </Link>
            </li>
          </ul>
        </div>
        {/* marketing ection End */}

        {/* This is for resources section */}
        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Resources</h5>
          <ul className="list-unstyled">
            <li>
              <Link href="#" size="tiny">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="#" size="tiny">
                News
              </Link>
            </li>
            <li>
              <Link href="#" size="tiny">
                Events
              </Link>
            </li>
            <li>
              <Link href="#" size="tiny">
                Webiner
              </Link>
            </li>
            <li>
              <Link href="#" size="tiny">
                Resources
              </Link>
            </li>
          </ul>
        </div>
        {/* resource section End */}
      </div>
    </div>

    {/* CopyRight Section for our page */}
    <div className="footer-copyright text-center py-3">
      © 2022 Copyright:
      <Link href="https://innovaccer.github.io/design-system/">
        {" "}
        Innovaccer MDS-Bootstrap
      </Link>
    </div>
    {/* CopyRight End */}
  </footer>
);

export default Footer;
