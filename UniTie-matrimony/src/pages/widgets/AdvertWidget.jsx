import { Typography, useTheme, Divider } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://matrimony-backend.onrender.com/assets/ad4.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Divider />

        <Typography color={main}>WEDDING PHOTOGRAPHY</Typography>
        <Typography color={medium}>janesmith.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Book your dream wedding photos.
      </Typography>
      <Divider />
      <img
        width="100%"
        height="auto"
        alt="ad1"
        src="https://matrimony-backend.onrender.com/assets/ad1.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />

      <FlexBetween>
        <Typography color={main}>ROAD TRIP</Typography>
        <Typography color={medium}>travellersclub.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Travel now with your partner with exclusive packages and vehicles
        providation at Travellers Club .
      </Typography>
      <Divider />
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://matrimony-backend.onrender.com/assets/ad2.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />

      <FlexBetween>
        <Typography color={main}>TRAVEL NOW</Typography>
        <Typography color={medium}>caribbeanworld.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Travelling alone is always boresome, so why not join our Caribbean World
        and suprise your love.
      </Typography>
      <Divider />
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="https://matrimony-backend.onrender.com/assets/ad3.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />

      <FlexBetween>
        <Typography color={main}>HONEYMOON PACKAGE</Typography>
        <Typography color={medium}>sweetheart.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Your pathway to memorable journey after marraige starts at honeymoon
        right! Sweet Heart provides you such memorable experiences. EXplore
        now!!
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
