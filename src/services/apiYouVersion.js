import React, { useState, useEffect } from "react";

const VersoDia = () => {
  useEffect(() => {
    fetch(
      "https://developers.youversionapi.com/1.0/verse_of_the_day/1?version_id=1",
      {
        headers: {
          "X-YouVersion-Developer-Token": "{your_developer_token}",
          "Accept-Language": "es",
          Accept: "application/json",
        },
      }
    )
      .then((result) => result.json())
      .then((json) => console.log(json));
  });

  return <div>Versículo del día</div>;
};

export default VersoDia;
