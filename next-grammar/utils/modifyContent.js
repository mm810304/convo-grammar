export function fixTableStyles(content) {
  const newTableStyleOne = `className={styles.tableStyleOne}`;
  const newTableStyleTwo = `className={styles.tableStyleTwo}`;
  const newTableStyleThree = `className={styles.tableStyleOne}`;

  const stepOne = content.replace(/class="tableStyle1"/g, newTableStyleOne);

  const stepTwo = stepOne.replace(/class="tableStyle2"/g, newTableStyleTwo);

  const fixedContent = stepTwo.replace(/class="tableStyle2"/g, newTableStyleThree);

  return fixedContent;
};