import { assetPath } from "../utils/assetPath.js";

const rawPartners = [
  {
    name: "Saud Foundation",
    logo: "/Pictures/saud.png"
  },
  {
    name: "Bogati Family",
    logo: "/Pictures/bogati.png"
  },
  {
    name: "Koirala Group",
    logo: "/Pictures/koirala.png"
  },
  {
    name: "Elite 3 Construction",
    logo: "/Pictures/elite3.png"
  },
  {
    name: "Kymanox",
    logo: "/Pictures/kymanox.png"
  }
];

const partners = rawPartners.map(partner => ({
  ...partner,
  logo: assetPath(partner.logo),
}));

export default partners;
