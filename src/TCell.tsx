interface P {
  isPlayer: boolean;
  isTrail: boolean;
  isOppie: boolean;
  isDropZone?: boolean;
}
export default function TCell({ isPlayer, isTrail, isOppie, isDropZone }: P) {
  if (isPlayer) {
    return <td>@</td>;
  }
  if (isTrail) {
    return <td>o</td>;
  }
  if (isOppie) {
    return <td>x</td>;
  }
  if (isDropZone) {
    return <td>*</td>;
  }
  return <td></td>;
}
