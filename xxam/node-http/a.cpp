#include <iostream>
#include <queue>

void bfs(int **a,int n){
    queue<int> tmp;
    int i,j;
    tmp.push(1);
    for(i=1; i<=n; i++){
        now = tmp.top();
        cout << now ;
        v[now -1 ]=1;
        for(j =1; j<=n ; j++){
            if(a[now][j-1] == 1){
                tmp.push(j);
            }
        }
    }
    
int main(){
    int a,b, x,y;
    cin >> a >> b;
    int dinh[a][a];
    for(int i = 0; i< a ; i++){
        for( int j = 0; j<a; j++){
            a[i][j] = 0;
        }
    }
    int v[a];
    for(int i = 0;i<a;i++){
        v[i] = 0;
    }
    for(int i = 0; i< b; i++){
        cin >> x >> y;
        x > y ? x=x : {int tmp; tmp = y ; y =x ; x= tmp;};
        a[x][y]=0;
    }
    for(int i = 0; i< a ; i++){
        for( int j = 0; j<a; j++){
            cout << a[i][j];
        }
    }
    return 0;
}
                
                