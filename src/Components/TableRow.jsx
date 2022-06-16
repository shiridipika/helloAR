function TableRow (props) {
    return (
        <tr>
      <th scope="row">{props.id+1}</th>
      <td>{props.user}</td>
      <td>Within 1 hour</td>
      <td>{props.role}</td>
      <td style={{textAlign: 'center'}}>
        <img src="images/bin.png" onClick={() => props.delete(props.id)} alt="delete" />
      </td>
    </tr>
    );
}

export default TableRow;