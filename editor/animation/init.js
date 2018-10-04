//Dont change it
requirejs(['ext_editor_io', 'jquery_190', 'raphael_210'],
    function (extIO, $) {
        function hyperCubeCanvas(dom, input, answer) {
            const difference = (a1, a2)=>{
                const rs = [];
                for (let i=0; i < a1.length; i += 1) {
                    if (a2.indexOf(a1[i]) === -1)
                        rs.push(a1[i]);
                }
                return rs;
            };

            const intersection = (a1, a2)=>{
                const rs = [];
                for (let i=0; i < a1.length; i += 1) {
                    for (let j=0; j < a2.length; j += 1) {
                        if (a1[i] == a2[j] && rs.indexOf(a1[i]) === -1)
                            rs.push(a1[i]);
                    }
                }
                return rs;
            };   

            const union = (a1, a2)=>{
                const rs = [];
                for (let i=0; i < a2.length; i += 1) {
                    if (a1.indexOf(a2[i]) === -1)
                        rs.push(a2[i]);
                }
                return a1.concat(rs);
            };

            /*--------------------------------------------
             *
             * solution of hyper cube (return right route )
             *
             *--------------------------------------------*/
            function solution(grid) {

                const [h, w] = [grid.length, grid[0].length];
                const all_cells = [];
                for (let r=0; r < h; r += 1) {
                    for (let c=0; c < w; c += 1)
                        all_cells.push(r*10+c);
                }

                const hs = all_cells.filter(
                    co=>'Hh'.indexOf(grid[Math.floor(co/10)][co%10]) > -1);

                function adjacent(cell, ch) {
                    let adj_cells = [];

                    [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(d=>{
                        const [dr, dc] = d;
                        adj_cells = adj_cells.concat(
                            [(Math.floor(cell/10)+dr)*10 + cell%10+dc])
                    });

                    adj_cells = intersection(adj_cells, all_cells);

                    if (ch)
                        return adj_cells.filter(
                            co=>(ch+ch.toUpperCase()).indexOf(
                                grid[Math.floor(co/10)][co%10]) > -1);
                    else
                        return adj_cells;
                } 

                let done_cell = [];
                let next_cell = [];
                let search_cell = [];
                let route = [];
                let idx = 1;
                const hyper = 'hypercube';
                for (let j=0; j < hs.length; j += 1) {
                    done_cell = [hs[j]];
                    next_cell = [hs[j]];
                    route = [[hs[j]]];
                    idx = 1;
                    while (idx < hyper.length) {
                        search_cell = next_cell;
                        next_cell = [];
                        search_cell.forEach(s=>{
                            next_cell
                                = union(next_cell, adjacent(s, hyper[idx]));
                        });
                        if (! next_cell.length)
                            break;
                        next_cell = difference(next_cell, done_cell);
                        done_cell = union(done_cell, next_cell);
                        idx += 1;
                        route.push(next_cell);
                    }
                    if (idx === 9)
                        return make_route(route);
                }

                function make_route(route) {
                    route.reverse();
                    const result = [route[0][0]];
                    for (let i=0; i < route.length-1; i += 1)
                        result.unshift(
                            intersection(
                                adjacent(result[0]), route[i+1])[0]);
                    return result;
                }
            }

            /*----------------------------------------------*
             *
             * hyper cube (draw)
             *
             *----------------------------------------------*/
            const attr = {
                line: {
                    thin: {
                        'stroke': '#65A1CF',
                        "stroke-width": 0.5,
                    },
                    route: {
                        'stroke': 'orange',
                        "stroke-width": 2,
                    },
                },
                text: {
                    thin: {
                        "stroke-width": 0,
                        'fill': '#65A1CF',
                        'font-size': '18px',
                        'font-family': 'robot',
                    },
                    deep: {
                        "stroke-width": 1,
                        //'stroke':'#294270', 
                        'stroke':'#006CA9', 
                        //'fill': '#294270',
                        'fill': '#006CA9',
                        'font-size': '18px',
                        'font-family': 'helvetica',
                    },
                },
            };

            const SIZE = 30; 
            const os = 32;
            const grid = input;
            const [w, h] = [grid[0].length, grid.length];
            const route = solution(grid);
            const paper
                = Raphael(dom, SIZE*w+os*2, SIZE*h+os*2, 0, 0);
            const ps1 = paper.set();
            const fig_dic = {};

            for (let r=0; r < h; r += 1) {
                for (let c=0; c < w; c += 1) {
                    const rt = 
                        paper.rect(
                            c*SIZE+os, r*SIZE+os, SIZE, SIZE).attr(
                            attr.line.thin);
                    fig_dic[r*100+c] =
                        paper.text(
                            c*SIZE+os+15, r*SIZE+os+15, grid[r][c]).attr(
                                attr.text.thin);
                }
            }
            if (! answer)
                return;

            function draw_line() {

                let i = 0;

                (function fn2(){

                    i += 1;

                    if (i === route.length)
                        return

                    const [nr, nc] = [Math.floor(route[i]/10), route[i]%10];
                    const path_ary = p.attrs.path;

                    fig_dic[nr*100+nc].animate(attr.text.deep, 1000);
                    p.animate({'path': path_ary.join(',')
                        + ' L' + (nc*SIZE+os+15) + ',' + (nr*SIZE+os+15)},
                        300, fn2);
                             // do not execute fn2
                })();

            }

            const [sy, sx] = [Math.floor(route[0]/10), route[0]%10];
            const p = paper.path(
                'M'+ (sx*SIZE+os+15) + ',' +  (sy*SIZE+os+15)).attr(
                    attr.line.route);
            fig_dic[sy*100+sx].animate(attr.text.deep, 2000);
            draw_line();
        }
        
        var $tryit;

        var io = new extIO({
            multipleArguments: false,
            functions: {
                python: 'hypercube',
                js: 'hypercube'
            },
            animation: function($expl, data){
                console.log(data.ext);
                hyperCubeCanvas($expl[0],
                    data.in, data.ext.answer);
            }
        });
        io.start();
    }
);
