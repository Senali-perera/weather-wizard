/*
* This component refresh and render the weather results.
* Return onClick method when the refresh button is clicked to re-render the results again
*
* Props:
*
* onClick: void function (event handler which trigger when the user clicks the button)
*/
const RefreshButton= ({ onClick }:{onClick:()=>void}) => {
  return (
    <div className="mr-1">
      <button
        id="refresh-btn"
        className="inline-flex items-center justify-center rounded-md border border-dark bg-white px-3 py-3 text-center text-base font-medium text-dark shadow-1 hover:bg-gray-4 disabled:border-gray-3 disabled:bg-gray-3 disabled:text-dark-5 dark:bg-gray-2 dark:shadow-box-dark dark:hover:bg-dark-3"
        onClick={onClick}
      >
        <span>
          <svg
            fill="#000000"
            height="20"
            width="20"
            version="1.1"
            id="Capa_1"
            viewBox="0 0 489.698 489.698"
            className="fill-current"
          >
            <g>
              <g>
                <path
                  d="M468.999,227.774c-11.4,0-20.8,8.3-20.8,19.8c-1,74.9-44.2,142.6-110.3,178.9c-99.6,54.7-216,5.6-260.6-61l62.9,13.1
			c10.4,2.1,21.8-4.2,23.9-15.6c2.1-10.4-4.2-21.8-15.6-23.9l-123.7-26c-7.2-1.7-26.1,3.5-23.9,22.9l15.6,124.8
			c1,10.4,9.4,17.7,19.8,17.7c15.5,0,21.8-11.4,20.8-22.9l-7.3-60.9c101.1,121.3,229.4,104.4,306.8,69.3
			c80.1-42.7,131.1-124.8,132.1-215.4C488.799,237.174,480.399,227.774,468.999,227.774z"
                />
                <path
                  d="M20.599,261.874c11.4,0,20.8-8.3,20.8-19.8c1-74.9,44.2-142.6,110.3-178.9c99.6-54.7,216-5.6,260.6,61l-62.9-13.1
			c-10.4-2.1-21.8,4.2-23.9,15.6c-2.1,10.4,4.2,21.8,15.6,23.9l123.8,26c7.2,1.7,26.1-3.5,23.9-22.9l-15.6-124.8
			c-1-10.4-9.4-17.7-19.8-17.7c-15.5,0-21.8,11.4-20.8,22.9l7.2,60.9c-101.1-121.2-229.4-104.4-306.8-69.2
			c-80.1,42.6-131.1,124.8-132.2,215.3C0.799,252.574,9.199,261.874,20.599,261.874z"
                />
              </g>
            </g>
          </svg>
        </span>
      </button>
    </div>
  );
};
export default RefreshButton;
