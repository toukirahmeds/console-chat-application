const cliSelect = require("cli-select");

/**
 * Loads protocol select list and returns the selected option.
 * If cancelled, then `undefined` is returned.
 * 
 * @returns {string | undefined}
 */
const loadProtocolSelection = async () => {
  console.log("What protocol do you want to use?");

  try {
    const selectedOption = await cliSelect({
      values: [ "tcp", "udp", "http" ],
      selected: "[\u2714]",
      unselected: "[ ]"
    });

    const { value } = selectedOption;

    return value;
  } catch (error) {
    return undefined;
  }
};

module.exports = loadProtocolSelection;
