import * as React from 'react';

function Conversion() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.7597 26.9604C22.4797 30.4004 20.4797 35.1204 20.4797 40.2404C20.4797 50.9604 29.1997 59.6804 39.9197 59.6804C50.6397 59.6804 59.4397 50.9604 59.4397 40.2404C59.4397 29.5204 50.7197 20.8004 39.9997 20.8004C34.3997 20.8004 29.3597 23.2004 25.7597 26.9604ZM33.1997 47.9204C33.3597 47.2804 33.5197 46.6404 33.7597 46.0004C33.9997 45.2804 34.1597 45.2004 34.8797 45.5204C35.9997 46.1604 37.2797 46.4804 38.5597 46.6404C39.3597 46.7204 40.1597 46.6404 40.9597 46.3204C42.3997 45.6804 42.6397 44.0004 41.4397 43.0404C41.0397 42.7204 40.5597 42.4804 40.0797 42.2404C38.7997 41.6804 37.5197 41.2804 36.3197 40.5604C34.3997 39.4404 33.1997 37.8404 33.3597 35.5204C33.5197 32.8804 35.0397 31.2004 37.4397 30.3204C38.3997 29.9204 38.4797 30.0004 38.4797 28.9604C38.4797 28.6404 38.4797 28.2404 38.4797 27.9204C38.4797 27.1204 38.6397 26.9604 39.4397 26.9604C39.6797 26.9604 39.9197 26.9604 40.1597 26.9604C41.8397 26.9604 41.8397 26.9604 41.8397 28.6404C41.8397 29.8404 41.8397 29.8404 43.0397 30.0004C43.9197 30.1604 44.7997 30.4004 45.5997 30.8004C46.0797 31.0404 46.2397 31.3604 46.0797 31.8404C45.8397 32.5604 45.6797 33.2804 45.4397 34.0004C45.1997 34.6404 45.0397 34.8004 44.3197 34.4804C43.0397 33.8404 41.6797 33.6004 40.2397 33.6804C39.8397 33.6804 39.5197 33.7604 39.1197 33.9204C37.8397 34.4804 37.6797 35.8404 38.7197 36.7204C39.2797 37.1204 39.8397 37.4404 40.4797 37.7604C41.5997 38.2404 42.7197 38.6404 43.7597 39.2004C47.1197 41.0404 47.9997 45.2004 45.6797 48.0804C44.7997 49.1204 43.7597 49.8404 42.3997 50.1604C41.8397 50.3204 41.5997 50.6404 41.5997 51.2004C41.5997 51.7604 41.5997 52.3204 41.5997 52.9604C41.5997 53.4404 41.3597 53.7604 40.7997 53.7604C40.1597 53.7604 39.5997 53.7604 38.9597 53.7604C38.3997 53.7604 38.1597 53.4404 38.1597 52.8804C38.1597 52.4804 38.1597 52.0804 38.1597 51.6004C38.1597 50.6404 38.1597 50.6404 37.1997 50.4804C36.0797 50.3204 34.9597 50.0004 33.9197 49.5204C33.0397 49.0404 32.9597 48.8004 33.1997 47.9204ZM12.8797 44.5604L10.2397 41.9204C11.1197 57.6004 24.0797 70.0804 39.9997 70.0804H41.9997V74.0804H39.9997C30.6397 74.0804 22.2397 70.3204 16.0797 64.1604C10.3197 58.3204 6.63973 50.4804 6.23973 41.8404L3.51973 44.5604L0.719727 41.7604L6.31973 36.1604L6.39973 36.0804L8.31973 34.1604L10.2397 36.0804L10.3197 36.1604L15.9197 41.7604L12.8797 44.5604ZM67.1197 35.9204L69.7597 38.5604C68.8797 22.8804 55.9197 10.4004 39.9997 10.4004H37.9997V6.40039H39.9997C49.3597 6.40039 57.7597 10.1604 63.9197 16.3204C69.6797 22.0804 73.3597 29.9204 73.7597 38.6404L76.4797 35.9204L79.2797 38.7204L73.6797 44.3204L73.5997 44.4004L71.6797 46.3204L69.7597 44.4004L69.6797 44.3204L64.0797 38.7204L67.1197 35.9204Z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoConversion = React.memo(Conversion);
export default MemoConversion;
