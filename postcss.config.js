import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";

const preserveGeneratedNodeSources = {
  postcssPlugin: "preserve-generated-node-sources",
  Once(root) {
    if (!root.source) {
      return;
    }

    root.walk((node) => {
      if (!node.source) {
        node.source = root.source;
      }
    });
  },
};

export default {
  plugins: [tailwindcss(), autoprefixer(), preserveGeneratedNodeSources],
};
