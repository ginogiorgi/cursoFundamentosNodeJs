import sharp from "sharp";

sharp("./original.png").resize(80).toFile("resized.png");
