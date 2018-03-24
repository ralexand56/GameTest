interface CubicBezierCurve {
    initialAxis: XYCoordinates;
    initialControlPoint: XYCoordinates;
    endingControlPoint: XYCoordinates;
    endingAxis: XYCoordinates;
}

interface XYCoordinates {
    x: number;
    y: number;
}

export const pathFromBezierCurve = (cubicBezierCurve: CubicBezierCurve) => {
  const {
    initialAxis,
    initialControlPoint,
    endingControlPoint,
    endingAxis,
  } = cubicBezierCurve;
  return `
    M${initialAxis.x} ${initialAxis.y}
    c ${initialControlPoint.x} ${initialControlPoint.y}
    ${endingControlPoint.x} ${endingControlPoint.y}
    ${endingAxis.x} ${endingAxis.y}
  `;
};
