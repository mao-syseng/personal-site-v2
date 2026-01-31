interface P {
  isPlayer: boolean;
}
export default function TCell({ isPlayer }: P) {
  if (isPlayer) {
    return <td>@</td>;
  }

  return <td>⋅</td>;
}
