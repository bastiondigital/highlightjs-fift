/*
Language: Fift
Author: Gunnar Grimnes <gunnar@bakkenbaeck.no>
Contributors: Garth Bjerk <garth@bakkenbaeck.no>,
Description: A low-level language Fift is used to program smart contracts on TON.
Website: https://docs.ton.org/develop/fift/overview
*/
export default function (hljs) {
  return {
    name: "Fift",
    keywords: {
	  $pattern: /[\w\d><\+\${}]+/,
      type: ": :: =:",
      keyword: "dup drop swap rot -rot over tuck nip 2dup 2drop 2swap pick roll -roll exch exch2 ?dup",
	  built_in: "+ - * / < > = <> <= >= type cr b{ x{ <b b> i, u, ref, s, $, B>boc boc+>B B{ Bx. file>B B>file smca>$ $>smca }",
    },
    contains: [
	  hljs.COMMENT(
		'/\\*', // begin
		'\\*/', // end
	  ),
	  hljs.COMMENT('//', '$'),
      //hljs.C_NUMBER_MODE, // TODO: this clashes with 2dup etc
      {
        scope: "string",
        begin: '"',
        end: '"',
      },

    ],
  };
}
